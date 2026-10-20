# --------------------------------------------------
# Shared versions
# --------------------------------------------------
ARG KEYCLOAK_VERSION=26.6.3
ARG EMAIL_AUTH_VERSION=26.7.2-KC26.6.3
ARG MESSAGING_AUTH_VERSION=26.0.2-KC26.6.3

# --------------------------------------------------
# Stage 1: Build PII Data Encryption Provider
# --------------------------------------------------
FROM maven:3.9-eclipse-temurin-21 AS pii-provider-builder

ARG KEYCLOAK_VERSION

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

RUN git clone \
    https://github.com/maja-x/Keycloak-PII-Data-Encryption-Provider.git \
    .

RUN mvn -B clean package \
    -DskipTests \
    -Dkeycloak.version="${KEYCLOAK_VERSION}"

# --------------------------------------------------
# Stage 2: Build Keycloakify theme
# Docker build context must be the theme project root
# --------------------------------------------------
FROM maven:3.9-eclipse-temurin-21 AS theme-builder

WORKDIR /app

# Install Node.js 22
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        ca-certificates \
        bash \
    && curl -fsSL https://deb.nodesource.com/setup_22.x \
       -o /tmp/nodesource_setup.sh \
    && bash /tmp/nodesource_setup.sh \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/* /tmp/nodesource_setup.sh

# Copy the complete theme project before npm ci.
# Keycloakify's postinstall needs the src directory.
COPY . .

# Install dependencies and run postinstall
RUN npm ci

# Build the Keycloak theme JAR
RUN npm run build-keycloak-theme

# Verify build output
RUN test -s \
    /app/dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar
# --------------------------------------------------
# Stage 3: Final Keycloak image
# --------------------------------------------------
FROM quay.io/keycloak/keycloak:26.6.3

ARG EMAIL_AUTH_VERSION
ARG MESSAGING_AUTH_VERSION

# Email authenticator
ADD --chown=keycloak:keycloak \
    https://repo.maven.apache.org/maven2/io/github/mesutpiskin/keycloak-2fa-email-authenticator/${EMAIL_AUTH_VERSION}/keycloak-2fa-email-authenticator-${EMAIL_AUTH_VERSION}.jar \
    /opt/keycloak/providers/keycloak-2fa-email-authenticator.jar

# Messaging authenticator
ADD --chown=keycloak:keycloak \
    https://repo.maven.apache.org/maven2/io/github/mesutpiskin/keycloak-2fa-messaging-authenticator/${MESSAGING_AUTH_VERSION}/keycloak-2fa-messaging-authenticator-${MESSAGING_AUTH_VERSION}.jar \
    /opt/keycloak/providers/keycloak-2fa-messaging-authenticator.jar

# PII Data Encryption Provider
COPY --from=pii-provider-builder \
    --chown=keycloak:keycloak \
    /app/target/*.jar \
    /opt/keycloak/providers/

# Keycloakify theme
COPY --from=theme-builder \
    --chown=keycloak:keycloak \
    /app/dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar \
    /opt/keycloak/providers/

ENV KC_DB=postgres
ENV KC_METRICS_ENABLED=true
ENV KC_HEALTH_ENABLED=true
ENV KC_EVENT_METRICS_USER_ENABLED=true
ENV KC_HTTP_RELATIVE_PATH=/auth
ENV KC_HTTP_MANAGEMENT_RELATIVE_PATH=/
ENV KC_FEATURES=declarative-ui
ENV KC_SPI_USER_PROVIDER=jpa-encrypted

RUN /opt/keycloak/bin/kc.sh build

EXPOSE 8080
