import type { MessageKey_defaultSet } from "keycloakify/login";

const messages: Record<MessageKey_defaultSet, string> = {
  doLogIn: "Masuk",
  doRegister: "Daftar",
  doRegisterSecurityKey: "Daftar",
  doCancel: "Batal",
  doSubmit: "Kirim",
  doBack: "Kembali",
  doYes: "Ya",
  doNo: "Tidak",
  doContinue: "Lanjutkan",
  doIgnore: "Abaikan",
  doAccept: "Terima",
  doDecline: "Tolak",
  doForgotPassword: "Lupa kata sandi?",
  doClickHere: "Klik di sini",
  doImpersonate: "Menyamar sebagai pengguna",
  doTryAgain: "Coba lagi",
  doTryAnotherWay: "Coba Cara Lain",
  doConfirmDelete: "Konfirmasi penghapusan",
  errorDeletingAccount: "Terjadi kesalahan saat menghapus akun",
  deletingAccountForbidden:
    "Anda tidak memiliki izin yang cukup untuk menghapus akun sendiri. Hubungi administrator.",
  kerberosNotConfigured: "Kerberos Belum Dikonfigurasi",
  kerberosNotConfiguredTitle: "Kerberos Belum Dikonfigurasi",
  bypassKerberosDetail:
    "Anda tidak masuk melalui Kerberos atau browser Anda belum dikonfigurasi untuk login menggunakan Kerberos. Silakan klik Lanjutkan untuk masuk dengan metode lain.",
  kerberosNotSetUp: "Kerberos belum dikonfigurasi. Anda tidak dapat masuk.",
  registerTitle: "Daftar",
  loginAccountTitle: "Masuk ke akun Anda",
  loginTitle: "Masuk ke {0}",
  loginTitleHtml: "{0}",
  impersonateTitle: "{0} Menyamar sebagai Pengguna",
  impersonateTitleHtml: "<strong>{0}</strong> Menyamar sebagai Pengguna",
  realmChoice: "Realm",
  unknownUser: "Pengguna tidak dikenal",
  loginTotpTitle: "Pengaturan Autentikator Seluler",
  loginProfileTitle: "Perbarui Informasi Akun",
  loginIdpReviewProfileTitle: "Perbarui Informasi Akun",
  loginTimeout: "Waktu percobaan login Anda telah habis. Proses login akan dimulai dari awal.",
  reauthenticate: "Silakan lakukan autentikasi ulang untuk melanjutkan",
  authenticateStrong: "Autentikasi kuat diperlukan untuk melanjutkan",
  oauthGrantTitle: "Berikan Akses ke {0}",
  oauthGrantTitleHtml: "{0}",
  oauthGrantInformation:
    "Pastikan Anda mempercayai {0} dengan memahami bagaimana {0} akan menangani data Anda.",
  oauthGrantReview: "Anda dapat meninjau ",
  oauthGrantTos: "ketentuan layanan.",
  oauthGrantPolicy: "kebijakan privasi.",
  errorTitle: "Maaf...",
  errorTitleHtml: "Kami <strong>mohon maaf</strong> ...",
  emailVerifyTitle: "Verifikasi Email",
  emailForgotTitle: "Lupa Kata Sandi?",
  updateEmailTitle: "Perbarui Email",
  emailUpdateConfirmationSentTitle: "Email konfirmasi telah dikirim",
  emailUpdateConfirmationSent:
    "Email konfirmasi telah dikirim ke {0}. Anda harus mengikuti petunjuk dalam email tersebut untuk menyelesaikan perubahan email.",
  emailUpdatedTitle: "Email diperbarui",
  emailUpdated: "Email akun berhasil diperbarui menjadi {0}.",
  updatePasswordTitle: "Perbarui Kata Sandi",
  codeSuccessTitle: "Kode Berhasil",
  codeErrorTitle: "Kode Kesalahan: {0}",
  displayUnsupported: "Jenis tampilan yang diminta tidak didukung",
  browserRequired: "Browser diperlukan untuk masuk",
  browserContinue: "Browser diperlukan untuk menyelesaikan proses login",
  browserContinuePrompt: "Buka browser dan lanjutkan login? [y/n]:",
  browserContinueAnswer: "y",
  usb: "USB",
  nfc: "NFC",
  bluetooth: "Bluetooth",
  internal: "Internal",
  unknown: "Tidak Diketahui",
  termsTitle: "Syarat dan Ketentuan",
  termsText: "",
  termsPlainText: "Syarat dan ketentuan belum ditentukan.",
  termsAcceptanceRequired: "Anda harus menyetujui syarat dan ketentuan kami.",
  acceptTerms: "Saya menyetujui syarat dan ketentuan",
  deleteCredentialTitle: "Hapus {0}",
  deleteCredentialMessage: "Apakah Anda ingin menghapus {0}?",
  recaptchaFailed: "reCAPTCHA tidak valid",
  recaptchaNotConfigured: "reCAPTCHA diperlukan, tetapi belum dikonfigurasi",
  consentDenied: "Persetujuan ditolak.",
  noAccount: "Pengguna baru?",
  username: "Nama Pengguna",
  usernameOrEmail: "Nama pengguna atau email",
  firstName: "Nama Depan",
  givenName: "Nama Pemberian",
  fullName: "Nama Lengkap",
  lastName: "Nama Belakang",
  familyName: "Nama Keluarga",
  email: "Email",
  password: "Kata Sandi",
  passwordConfirm: "Konfirmasi Kata Sandi",
  passwordNew: "Kata Sandi Baru",
  passwordNewConfirm: "Konfirmasi Kata Sandi Baru",
  hidePassword: "Sembunyikan kata sandi",
  showPassword: "Tampilkan kata sandi",
  rememberMe: "Ingat saya",
  authenticatorCode: "Kode sekali pakai",
  address: "Alamat",
  street: "Jalan",
  locality: "Kota atau Wilayah",
  region: "Provinsi atau Wilayah",
  postal_code: "Kode Pos",
  country: "Negara",
  emailVerified: "Email terverifikasi",
  website: "Situs Web",
  phoneNumber: "Nomor Telepon",
  phoneNumberVerified: "Nomor telepon terverifikasi",
  gender: "Jenis Kelamin",
  birthday: "Tanggal Lahir",
  zoneinfo: "Zona Waktu",
  gssDelegationCredential: "Kredensial Delegasi GSS",
  logoutOtherSessions: "Keluar dari perangkat lain",
  profileScopeConsentText: "Profil Pengguna",
  emailScopeConsentText: "Alamat Email",
  addressScopeConsentText: "Alamat",
  phoneScopeConsentText: "Nomor Telepon",
  offlineAccessScopeConsentText: "Akses Offline",
  samlRoleListScopeConsentText: "Peran Saya",
  rolesScopeConsentText: "Peran Pengguna",
  organizationScopeConsentText: "Organisasi",
  restartLoginTooltip: "Mulai ulang login",
  loginTotpIntro:
    "Anda perlu menyiapkan generator One-Time Password untuk mengakses akun ini",
  loginTotpStep1:
    "Instal salah satu aplikasi berikut di perangkat seluler Anda:",
  loginTotpStep2: "Buka aplikasi dan pindai kode batang:",
  loginTotpStep3:
    "Masukkan kode sekali pakai yang diberikan oleh aplikasi, lalu klik Kirim untuk menyelesaikan pengaturan.",
  loginTotpStep3DeviceName:
    "Masukkan Nama Perangkat untuk membantu Anda mengelola perangkat OTP.",
  loginTotpManualStep2: "Buka aplikasi dan masukkan kunci berikut:",
  loginTotpManualStep3:
    "Gunakan nilai konfigurasi berikut jika aplikasi memungkinkan Anda mengaturnya:",
  loginTotpUnableToScan: "Tidak dapat memindai?",
  loginTotpScanBarcode: "Pindai kode batang?",
  loginCredential: "Kredensial",
  loginOtpOneTime: "Kode sekali pakai",
  loginTotpType: "Tipe",
  loginTotpAlgorithm: "Algoritma",
  loginTotpDigits: "Digit",
  loginTotpInterval: "Interval",
  loginTotpCounter: "Penghitung",
  loginTotpDeviceName: "Nama Perangkat",
  "loginTotp.totp": "Berbasis Waktu",
  "loginTotp.hotp": "Berbasis Penghitung",
  totpAppFreeOTPName: "FreeOTP",
  totpAppGoogleName: "Google Authenticator",
  totpAppMicrosoftAuthenticatorName: "Microsoft Authenticator",
  loginChooseAuthenticator: "Pilih metode login",
  oauthGrantRequest: "Apakah Anda memberikan izin akses ini?",
  inResource: "di",
  oauth2DeviceVerificationTitle: "Login Perangkat",
  verifyOAuth2DeviceUserCode:
    "Masukkan kode yang diberikan oleh perangkat Anda, lalu klik Kirim",
  oauth2DeviceInvalidUserCodeMessage: "Kode tidak valid, silakan coba lagi.",
  oauth2DeviceExpiredUserCodeMessage:
    "Kode telah kedaluwarsa. Silakan kembali ke perangkat Anda dan coba hubungkan kembali.",
  oauth2DeviceVerificationCompleteHeader: "Login Perangkat Berhasil",
  oauth2DeviceVerificationCompleteMessage:
    "Anda dapat menutup jendela browser ini dan kembali ke perangkat Anda.",
  oauth2DeviceVerificationFailedHeader: "Login Perangkat Gagal",
  oauth2DeviceVerificationFailedMessage:
    "Anda dapat menutup jendela browser ini, kembali ke perangkat Anda, dan mencoba menghubungkan kembali.",
  oauth2DeviceConsentDeniedMessage:
    "Persetujuan untuk menghubungkan perangkat ditolak.",
  oauth2DeviceAuthorizationGrantDisabledMessage:
    "Klien tidak diizinkan untuk memulai OAuth 2.0 Device Authorization Grant. Alur ini dinonaktifkan untuk klien.",
  emailVerifyInstruction1:
    "Email berisi petunjuk untuk memverifikasi alamat email Anda telah dikirim ke {0}.",
  emailVerifyInstruction2:
    "Belum menerima kode verifikasi melalui email?",
  emailVerifyInstruction3: "untuk mengirim ulang email.",
  emailLinkIdpTitle: "Tautkan {0}",
  emailLinkIdp1:
    "Email berisi petunjuk untuk menautkan akun {0} {1} dengan akun {2} Anda telah dikirim kepada Anda.",
  emailLinkIdp2: "Belum menerima kode verifikasi melalui email?",
  emailLinkIdp3: "untuk mengirim ulang email.",
  emailLinkIdp4: "Jika Anda sudah memverifikasi email di browser lain",
  emailLinkIdp5: "untuk melanjutkan.",
  backToLogin: "&laquo; Kembali ke Login",
  emailInstruction:
    "Masukkan nama pengguna atau alamat email Anda dan kami akan mengirimkan petunjuk untuk membuat kata sandi baru.",
  emailInstructionUsername:
    "Masukkan nama pengguna Anda dan kami akan mengirimkan petunjuk untuk membuat kata sandi baru.",
  copyCodeInstruction:
    "Silakan salin kode ini dan tempelkan ke aplikasi Anda:",
  pageExpiredTitle: "Halaman telah kedaluwarsa",
  pageExpiredMsg1: "Untuk memulai ulang proses login",
  pageExpiredMsg2: "Untuk melanjutkan proses login",
  personalInfo: "Informasi Pribadi:",
  role_admin: "Admin",
  "role_realm-admin": "Admin Realm",
  "role_create-realm": "Membuat Realm",
  "role_create-client": "Membuat Klien",
  "role_view-realm": "Melihat Realm",
  "role_view-users": "Melihat Pengguna",
  "role_view-applications": "Melihat Aplikasi",
  "role_view-clients": "Melihat Klien",
  "role_view-events": "Melihat Event",
  "role_view-identity-providers": "Melihat Identity Provider",
  "role_manage-realm": "Mengelola Realm",
  "role_manage-users": "Mengelola Pengguna",
  "role_manage-applications": "Mengelola Aplikasi",
  "role_manage-identity-providers": "Mengelola Identity Provider",
  "role_manage-clients": "Mengelola Klien",
  "role_manage-events": "Mengelola Event",
  "role_view-profile": "Melihat Profil",
  "role_manage-account": "Mengelola Akun",
  "role_manage-account-links": "Mengelola Tautan Akun",
  "role_read-token": "Membaca Token",
  "role_offline-access": "Akses Offline",
  client_account: "Akun",
  "client_account-console": "Konsol Akun",
  "client_security-admin-console": "Konsol Admin Keamanan",
  "client_admin-cli": "CLI Admin",
  "client_realm-management": "Manajemen Realm",
  client_broker: "Broker",
  requiredFields: "Kolom wajib diisi",
  invalidUserMessage: "Nama pengguna atau kata sandi tidak valid.",
  invalidUsernameMessage: "Nama pengguna tidak valid.",
  invalidUsernameOrEmailMessage: "Nama pengguna atau email tidak valid.",
  invalidPasswordMessage: "Kata sandi tidak valid.",
  invalidEmailMessage: "Alamat email tidak valid.",
  accountDisabledMessage:
    "Akun dinonaktifkan. Hubungi administrator Anda.",
  accountTemporarilyDisabledMessage:
    "Akun dinonaktifkan sementara. Hubungi administrator Anda atau coba lagi nanti.",
  expiredCodeMessage: "Waktu login telah habis. Silakan masuk kembali.",
  expiredActionMessage:
    "Tindakan telah kedaluwarsa. Silakan lanjutkan login sekarang.",
  expiredActionTokenNoSessionMessage: "Tindakan telah kedaluwarsa.",
  expiredActionTokenSessionExistsMessage:
    "Tindakan telah kedaluwarsa. Silakan mulai lagi.",
  sessionLimitExceeded: "Terlalu banyak sesi aktif",
  identityProviderLogoutFailure: "Gagal Keluar dari SAML IdP",
  missingFirstNameMessage: "Silakan masukkan nama depan.",
  missingLastNameMessage: "Silakan masukkan nama belakang.",
  missingEmailMessage: "Silakan masukkan email.",
  missingUsernameMessage: "Silakan masukkan nama pengguna.",
  missingPasswordMessage: "Silakan masukkan kata sandi.",
  missingTotpMessage: "Silakan masukkan kode autentikator.",
  missingTotpDeviceNameMessage: "Silakan masukkan nama perangkat.",
  notMatchPasswordMessage: "Kata sandi tidak cocok.",
  "error-invalid-value": "Nilai tidak valid.",
  "error-invalid-blank": "Silakan masukkan nilai.",
  "error-empty": "Silakan masukkan nilai.",
  "error-invalid-length": "Panjang harus antara {1} dan {2}.",
  "error-invalid-length-too-short": "Panjang minimal adalah {1}.",
  "error-invalid-length-too-long": "Panjang maksimal adalah {2}.",
  "error-invalid-email": "Alamat email tidak valid.",
  "error-invalid-number": "Angka tidak valid.",
  "error-number-out-of-range": "Angka harus antara {1} dan {2}.",
  "error-number-out-of-range-too-small":
    "Nilai angka minimal adalah {1}.",
  "error-number-out-of-range-too-big":
    "Nilai angka maksimal adalah {2}.",
  "error-pattern-no-match": "Nilai tidak valid.",
  "error-invalid-uri": "URL tidak valid.",
  "error-invalid-uri-scheme": "Skema URL tidak valid.",
  "error-invalid-uri-fragment": "Fragmen URL tidak valid.",
  "error-user-attribute-required": "Silakan isi kolom ini.",
  "error-invalid-date": "Tanggal tidak valid.",
  "error-user-attribute-read-only": "Kolom ini hanya dapat dibaca.",
  "error-username-invalid-character": "Nilai mengandung karakter yang tidak valid.",
  "error-person-name-invalid-character":
    "Nilai mengandung karakter yang tidak valid.",
  "error-reset-otp-missing-id": "Silakan pilih konfigurasi OTP.",
  invalidPasswordExistingMessage: "Kata sandi saat ini tidak valid.",
  invalidPasswordBlacklistedMessage:
    "Kata sandi tidak valid: kata sandi tersebut masuk daftar hitam.",
  invalidPasswordConfirmMessage:
    "Konfirmasi kata sandi tidak cocok.",
  invalidTotpMessage: "Kode autentikator tidak valid.",
  usernameExistsMessage: "Nama pengguna sudah digunakan.",
  emailExistsMessage: "Email sudah digunakan.",
  federatedIdentityExistsMessage:
    "Pengguna dengan {0} {1} sudah ada. Silakan masuk ke manajemen akun untuk menautkan akun.",
  federatedIdentityUnavailableMessage:
    "Pengguna {0} yang diautentikasi dengan identity provider {1} tidak ditemukan. Silakan hubungi administrator Anda.",
  federatedIdentityUnmatchedEssentialClaimMessage:
    "ID token yang diterbitkan oleh identity provider tidak sesuai dengan essential claim yang dikonfigurasi. Silakan hubungi administrator Anda.",
  confirmLinkIdpTitle: "Akun Sudah Ada",
  confirmOverrideIdpTitle: "Tautan Broker Sudah Ada",
  federatedIdentityConfirmLinkMessage:
    "Pengguna dengan {0} {1} sudah ada. Bagaimana Anda ingin melanjutkan?",
  federatedIdentityConfirmOverrideMessage:
    "Anda mencoba menautkan akun {0} dengan akun {1} {2}. Namun, akun Anda sudah tertaut dengan akun {3} {4} yang berbeda. Apakah Anda yakin ingin mengganti tautan yang ada dengan akun baru?",
  federatedIdentityConfirmReauthenticateMessage:
    "Lakukan autentikasi untuk menautkan akun Anda dengan {0}",
  nestedFirstBrokerFlowMessage:
    "Pengguna {0} {1} tidak tertaut ke pengguna yang dikenal.",
  confirmLinkIdpReviewProfile: "Tinjau Profil",
  confirmLinkIdpContinue: "Tambahkan ke akun yang ada",
  confirmOverrideIdpContinue:
    "Ya, ganti tautan dengan akun saat ini",
  configureTotpMessage:
    "Anda perlu menyiapkan Autentikator Seluler untuk mengaktifkan akun Anda.",
  configureBackupCodesMessage:
    "Anda perlu menyiapkan Kode Pemulihan untuk mengaktifkan akun Anda.",
  updateProfileMessage:
    "Anda perlu memperbarui profil pengguna untuk mengaktifkan akun Anda.",
  updatePasswordMessage:
    "Anda perlu mengubah kata sandi untuk mengaktifkan akun Anda.",
  updateEmailMessage:
    "Anda perlu memperbarui alamat email untuk mengaktifkan akun Anda.",
  resetPasswordMessage: "Anda perlu mengubah kata sandi.",
  verifyEmailMessage:
    "Anda perlu memverifikasi alamat email untuk mengaktifkan akun Anda.",
  linkIdpMessage:
    "Anda perlu memverifikasi alamat email untuk menautkan akun dengan {0}.",
  emailSentMessage:
    "Anda akan menerima email dalam beberapa saat yang berisi petunjuk selanjutnya.",
  emailSendErrorMessage:
    "Gagal mengirim email. Silakan coba lagi nanti.",
  accountUpdatedMessage: "Akun Anda telah diperbarui.",
  accountPasswordUpdatedMessage: "Kata sandi Anda telah diperbarui.",
  delegationCompleteHeader: "Login Berhasil",
  delegationCompleteMessage:
    "Anda dapat menutup jendela browser ini dan kembali ke aplikasi konsol Anda.",
  delegationFailedHeader: "Login Gagal",
  delegationFailedMessage:
    "Anda dapat menutup jendela browser ini, kembali ke aplikasi konsol Anda, dan mencoba login kembali.",
  noAccessMessage: "Tidak ada akses",
  invalidPasswordMinLengthMessage:
    "Kata sandi tidak valid: panjang minimum {0}.",
  invalidPasswordMaxLengthMessage:
    "Kata sandi tidak valid: panjang maksimum {0}.",
  invalidPasswordMinDigitsMessage:
    "Kata sandi tidak valid: harus mengandung setidaknya {0} digit angka.",
  invalidPasswordMinLowerCaseCharsMessage:
    "Kata sandi tidak valid: harus mengandung setidaknya {0} huruf kecil.",
  invalidPasswordMinUpperCaseCharsMessage:
    "Kata sandi tidak valid: harus mengandung setidaknya {0} huruf besar.",
  invalidPasswordMinSpecialCharsMessage:
    "Kata sandi tidak valid: harus mengandung setidaknya {0} karakter khusus.",
  invalidPasswordNotUsernameMessage:
    "Kata sandi tidak valid: tidak boleh sama dengan nama pengguna.",
  invalidPasswordNotContainsUsernameMessage:
    "Kata sandi tidak valid: tidak boleh mengandung nama pengguna.",
  invalidPasswordNotEmailMessage:
    "Kata sandi tidak valid: tidak boleh sama dengan email.",
  invalidPasswordRegexPatternMessage:
    "Kata sandi tidak valid: tidak sesuai dengan pola regex.",
  invalidPasswordHistoryMessage:
    "Kata sandi tidak valid: tidak boleh sama dengan salah satu dari {0} kata sandi sebelumnya.",
  invalidPasswordGenericMessage:
    "Kata sandi tidak valid: kata sandi baru tidak memenuhi kebijakan kata sandi.",
  failedToProcessResponseMessage: "Gagal memproses respons",
  httpsRequiredMessage: "HTTPS diperlukan",
  realmNotEnabledMessage: "Realm tidak diaktifkan",
  invalidRequestMessage: "Permintaan tidak valid",
  successLogout: "Anda telah keluar",
  failedLogout: "Gagal keluar",
  unknownLoginRequesterMessage: "Peminta login tidak dikenal",
  loginRequesterNotEnabledMessage: "Peminta login tidak diaktifkan",
  bearerOnlyMessage:
    "Aplikasi bearer-only tidak diizinkan untuk memulai login melalui browser",
  standardFlowDisabledMessage:
    "Klien tidak diizinkan memulai login melalui browser dengan response_type yang diberikan. Standard Flow dinonaktifkan untuk klien.",
  implicitFlowDisabledMessage:
    "Klien tidak diizinkan memulai login melalui browser dengan response_type yang diberikan. Implicit Flow dinonaktifkan untuk klien.",
  invalidRedirectUriMessage: "URI pengalihan tidak valid",
  unsupportedNameIdFormatMessage: "NameIDFormat tidak didukung",
  invalidRequesterMessage: "Peminta tidak valid",
  registrationNotAllowedMessage: "Pendaftaran tidak diizinkan",
  resetCredentialNotAllowedMessage: "Reset kredensial tidak diizinkan",
  permissionNotApprovedMessage: "Izin tidak disetujui.",
  noRelayStateInResponseMessage:
    "Tidak ada relay state dalam respons dari identity provider.",
  insufficientPermissionMessage:
    "Izin tidak mencukupi untuk menautkan identitas.",
  couldNotProceedWithAuthenticationRequestMessage:
    "Tidak dapat melanjutkan permintaan autentikasi ke identity provider.",
  couldNotObtainTokenMessage:
    "Tidak dapat memperoleh token dari identity provider.",
  unexpectedErrorRetrievingTokenMessage:
    "Terjadi kesalahan tak terduga saat mengambil token dari identity provider.",
  unexpectedErrorHandlingResponseMessage:
    "Terjadi kesalahan tak terduga saat menangani respons dari identity provider.",
  identityProviderAuthenticationFailedMessage:
    "Autentikasi gagal. Tidak dapat melakukan autentikasi dengan identity provider.",
  couldNotSendAuthenticationRequestMessage:
    "Tidak dapat mengirim permintaan autentikasi ke identity provider.",
  unexpectedErrorHandlingRequestMessage:
    "Terjadi kesalahan tak terduga saat menangani permintaan autentikasi ke identity provider.",
  invalidAccessCodeMessage: "Kode akses tidak valid.",
  sessionNotActiveMessage: "Sesi tidak aktif.",
  invalidCodeMessage:
    "Terjadi kesalahan. Silakan login kembali melalui aplikasi Anda.",
  cookieNotFoundMessage:
    "Cookie tidak ditemukan. Pastikan cookie diaktifkan di browser Anda.",
  insufficientLevelOfAuthentication:
    "Tingkat autentikasi yang diminta belum terpenuhi.",
  identityProviderUnexpectedErrorMessage:
    "Terjadi kesalahan tak terduga saat melakukan autentikasi dengan identity provider",
  identityProviderMissingStateMessage:
    "Parameter state tidak ditemukan dalam respons dari identity provider.",
  identityProviderMissingCodeOrErrorMessage:
    "Parameter code atau error tidak ditemukan dalam respons dari identity provider.",
  identityProviderInvalidResponseMessage:
    "Respons dari identity provider tidak valid.",
  identityProviderInvalidSignatureMessage:
    "Tanda tangan dalam respons dari identity provider tidak valid.",
  identityProviderNotFoundMessage:
    "Tidak dapat menemukan identity provider dengan identifier tersebut.",
  identityProviderLinkSuccess:
    "Email Anda berhasil diverifikasi. Silakan kembali ke browser awal dan lanjutkan login di sana.",
  staleCodeMessage:
    "Halaman ini sudah tidak valid. Silakan kembali ke aplikasi Anda dan masuk kembali.",
  realmSupportsNoCredentialsMessage:
    "Realm tidak mendukung jenis kredensial apa pun.",
  credentialSetupRequired:
    "Tidak dapat login, pengaturan kredensial diperlukan.",
  identityProviderNotUniqueMessage:
    "Realm mendukung beberapa identity provider. Tidak dapat menentukan identity provider yang harus digunakan untuk autentikasi.",
  emailVerifiedMessage: "Alamat email Anda telah diverifikasi.",
  emailVerifiedAlreadyMessage:
    "Alamat email Anda sudah diverifikasi.",
  staleEmailVerificationLink:
    "Tautan yang Anda klik adalah tautan lama dan sudah tidak valid. Mungkin Anda sudah memverifikasi email sebelumnya.",
  identityProviderAlreadyLinkedMessage:
    "Identitas federasi yang dikembalikan oleh {0} sudah tertaut ke pengguna lain.",
  confirmAccountLinking:
    "Konfirmasi penautan akun {0} dari identity provider {1} dengan akun Anda.",
  confirmEmailAddressVerification:
    "Konfirmasi validitas alamat email {0}.",
  confirmExecutionOfActions: "Lakukan tindakan berikut",
  backToApplication: "&laquo; Kembali ke Aplikasi",
  missingParameterMessage: "Parameter yang diperlukan tidak ada: {0}",
  clientNotFoundMessage: "Klien tidak ditemukan.",
  clientDisabledMessage: "Klien dinonaktifkan.",
  invalidParameterMessage: "Parameter tidak valid: {0}",
  alreadyLoggedIn: "Anda sudah masuk.",
  differentUserAuthenticated:
    "Anda sudah terautentikasi sebagai pengguna lain '{0}' dalam sesi ini. Silakan keluar terlebih dahulu.",
  brokerLinkingSessionExpired:
    "Permintaan penautan akun broker dilakukan, tetapi sesi saat ini sudah tidak valid.",
  proceedWithAction: "&raquo; Klik di sini untuk melanjutkan",
  acrNotFulfilled: "Persyaratan autentikasi belum terpenuhi",
  "requiredAction.CONFIGURE_TOTP": "Konfigurasi OTP",
  "requiredAction.TERMS_AND_CONDITIONS": "Syarat dan Ketentuan",
  "requiredAction.UPDATE_PASSWORD": "Perbarui Kata Sandi",
  "requiredAction.UPDATE_PROFILE": "Perbarui Profil",
  "requiredAction.VERIFY_EMAIL": "Verifikasi Email",
  "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES":
    "Buat Kode Pemulihan",
  "requiredAction.webauthn-register-passwordless":
    "Daftarkan WebAuthn Tanpa Kata Sandi",
  invalidTokenRequiredActions:
    "Tindakan yang diperlukan dalam tautan tidak valid",
  doX509Login: "Anda akan masuk sebagai:",
  clientCertificate: "Sertifikat klien X509:",
  noCertificate: "[Tidak Ada Sertifikat]",
  pageNotFound: "Halaman tidak ditemukan",
  internalServerError: "Terjadi kesalahan pada server internal",
  "console-username": "Nama Pengguna:",
  "console-password": "Kata Sandi:",
  "console-otp": "One-Time Password:",
  "console-new-password": "Kata Sandi Baru:",
  "console-confirm-password": "Konfirmasi Kata Sandi:",
  "console-update-password": "Pembaruan kata sandi Anda diperlukan.",
  "console-verify-email":
    "Anda perlu memverifikasi alamat email Anda. Kami telah mengirim email ke {0} yang berisi kode verifikasi. Silakan masukkan kode tersebut pada kolom di bawah.",
  "console-email-code": "Kode Email:",
  "console-accept-terms": "Terima Syarat dan Ketentuan? [y/n]:",
  "console-accept": "y",
  "openshift.scope.user_info": "Informasi pengguna",
  "openshift.scope.user_check-access": "Informasi akses pengguna",
  "openshift.scope.user_full": "Akses Penuh",
  "openshift.scope.list-projects": "Daftar Proyek",
  "saml.post-form.title": "Pengalihan Autentikasi",
  "saml.post-form.message": "Mengalihkan, silakan tunggu.",
  "saml.post-form.js-disabled":
    "JavaScript dinonaktifkan. Kami sangat menyarankan untuk mengaktifkannya. Klik tombol di bawah untuk melanjutkan. ",
  "saml.artifactResolutionServiceInvalidResponse":
    "Tidak dapat menyelesaikan artifact.",
  "otp-display-name": "Aplikasi Autentikator",
  "otp-help-text":
    "Masukkan kode verifikasi dari aplikasi autentikator.",
  "otp-reset-description":
    "Konfigurasi OTP mana yang ingin dihapus?",
  "password-display-name": "Kata Sandi",
  "password-help-text":
    "Masuk dengan memasukkan kata sandi Anda.",
  "auth-username-form-display-name": "Nama Pengguna",
  "auth-username-form-help-text":
    "Mulai login dengan memasukkan nama pengguna Anda",
  "auth-username-password-form-display-name": "Nama Pengguna dan Kata Sandi",
  "auth-username-password-form-help-text":
    "Masuk dengan memasukkan nama pengguna dan kata sandi Anda.",
  "auth-x509-client-username-form-display-name": "Sertifikat X509",
  "auth-x509-client-username-form-help-text":
    "Masuk menggunakan sertifikat klien X509.",
  "auth-recovery-authn-code-form-display-name":
    "Kode Autentikasi Pemulihan",
  "auth-recovery-authn-code-form-help-text":
    "Masukkan kode autentikasi pemulihan dari daftar yang sebelumnya telah dibuat.",
  "auth-recovery-code-info-message":
    "Masukkan kode pemulihan yang ditentukan.",
  "auth-recovery-code-prompt": "Kode pemulihan #{0}",
  "auth-recovery-code-header":
    "Login dengan Kode Autentikasi Pemulihan",
  "recovery-codes-error-invalid":
    "Kode autentikasi pemulihan tidak valid",
  "recovery-code-config-header": "Kode Autentikasi Pemulihan",
  "recovery-code-config-warning-title":
    "Kode pemulihan ini tidak akan ditampilkan lagi setelah Anda meninggalkan halaman ini",
  "recovery-code-config-warning-message":
    "Pastikan Anda mencetak, mengunduh, atau menyalinnya ke pengelola kata sandi dan menyimpannya dengan aman. Membatalkan pengaturan ini akan menghapus kode pemulihan tersebut dari akun Anda.",
  "recovery-codes-print": "Cetak",
  "recovery-codes-download": "Unduh",
  "recovery-codes-copy": "Salin",
  "recovery-codes-copied": "Tersalin",
  "recovery-codes-confirmation-message":
    "Saya telah menyimpan kode-kode ini di tempat yang aman",
  "recovery-codes-action-complete": "Selesaikan Pengaturan",
  "recovery-codes-action-cancel": "Batalkan Pengaturan",
  "recovery-codes-download-file-header":
    "Simpan kode pemulihan ini di tempat yang aman.",
  "recovery-codes-download-file-description":
    "Kode pemulihan adalah kode sandi sekali pakai yang memungkinkan Anda masuk ke akun jika tidak memiliki akses ke aplikasi autentikator.",
  "recovery-codes-download-file-date":
    "Kode ini dibuat pada",
  "recovery-codes-label-default": "Kode Pemulihan",
  "webauthn-display-name": "Passkey",
  "webauthn-help-text": "Gunakan Passkey Anda untuk masuk.",
  "webauthn-passwordless-display-name": "Passkey",
  "webauthn-passwordless-help-text":
    "Gunakan Passkey untuk masuk tanpa kata sandi.",
  "webauthn-login-title": "Login dengan Passkey",
  "webauthn-registration-title": "Pendaftaran Passkey",
  "webauthn-available-authenticators": "Passkey yang Tersedia",
  "webauthn-unsupported-browser-text":
    "WebAuthn tidak didukung oleh browser ini. Coba gunakan browser lain atau hubungi administrator Anda.",
  "webauthn-doAuthenticate": "Masuk dengan Passkey",
  "webauthn-createdAt-label": "Dibuat",
  "webauthn-registration-init-label": "Passkey (Label Default)",
  "webauthn-registration-init-label-prompt":
    "Silakan masukkan label Passkey yang telah Anda daftarkan",
  "webauthn-error-title": "Kesalahan Passkey",
  "webauthn-error-registration":
    "Gagal mendaftarkan Passkey Anda.<br/> {0}",
  "webauthn-error-api-get":
    "Gagal melakukan autentikasi dengan Passkey.<br/> {0}",
  "webauthn-error-different-user":
    "Pengguna yang pertama kali diautentikasi bukan pengguna yang diautentikasi oleh Passkey.",
  "webauthn-error-auth-verification":
    "Hasil autentikasi Passkey tidak valid.<br/> {0}",
  "webauthn-error-register-verification":
    "Hasil pendaftaran Passkey tidak valid.<br/> {0}",
  "webauthn-error-user-not-found":
    "Pengguna yang diautentikasi oleh Passkey tidak dikenal.",
  "passkey-login-title": "Login dengan Passkey",
  "passkey-available-authenticators": "Passkey yang Tersedia",
  "passkey-unsupported-browser-text":
    "Passkey tidak didukung oleh browser ini. Coba gunakan browser lain atau hubungi administrator Anda.",
  "passkey-doAuthenticate": "Masuk dengan Passkey",
  "passkey-createdAt-label": "Dibuat",
  "passkey-autofill-select": "Pilih Passkey Anda",
  "identity-provider-redirector":
    "Hubungkan dengan Identity Provider lain",
  "identity-provider-login-label": "Atau masuk dengan",
  "idp-email-verification-display-name": "Verifikasi Email",
  "idp-email-verification-help-text":
    "Tautkan akun Anda dengan memverifikasi email.",
  "idp-username-password-form-display-name":
    "Nama Pengguna dan Kata Sandi",
  "idp-username-password-form-help-text":
    "Tautkan akun Anda dengan melakukan login.",
  finalDeletionConfirmation:
    "Jika Anda menghapus akun, akun tersebut tidak dapat dipulihkan. Untuk mempertahankan akun, klik Batal.",
  irreversibleAction: "Tindakan ini tidak dapat dibatalkan",
  deleteAccountConfirm: "Konfirmasi Penghapusan Akun",
  deletingImplies: "Menghapus akun Anda berarti:",
  errasingData: "Menghapus seluruh data Anda",
  loggingOutImmediately: "Segera mengeluarkan Anda dari sistem",
  accountUnusable:
    "Akun ini tidak dapat digunakan lagi untuk mengakses aplikasi",
  userDeletedSuccessfully: "Pengguna berhasil dihapus",
  "access-denied": "Akses ditolak",
  "access-denied-when-idp-auth":
    "Akses ditolak saat melakukan autentikasi dengan {0}",
  "frontchannel-logout.title": "Keluar",
  "frontchannel-logout.message":
    "Anda sedang keluar dari aplikasi berikut",
  logoutConfirmTitle: "Keluar",
  logoutConfirmHeader: "Apakah Anda ingin keluar?",
  doLogout: "Keluar",
  readOnlyUsernameMessage:
    "Anda tidak dapat memperbarui nama pengguna karena kolom ini hanya dapat dibaca.",
  "error-invalid-multivalued-size":
    "Atribut {0} harus memiliki minimal {1} dan maksimal {2} nilai.",
  "organization.confirm-membership.title":
    "Anda akan bergabung dengan organisasi ${kc.org.name}",
  "organization.confirm-membership":
    "Dengan mengeklik tautan di bawah, Anda akan menjadi anggota organisasi {0}:",
  "organization.member.register.title":
    "Buat akun untuk bergabung dengan organisasi ${kc.org.name}",
  shouldBeEqual: "{0} harus sama dengan {1}",
  shouldBeDifferent: "{0} harus berbeda dari {1}",
  shouldMatchPattern: "Pola harus sesuai dengan: `/{0}/`",
  mustBeAnInteger: "Harus berupa bilangan bulat",
  notAValidOption: "Bukan pilihan yang valid",
  selectAnOption: "Pilih salah satu pilihan",
  remove: "Hapus",
  addValue: "Tambah Nilai",
  languages: "Bahasa",
  "organization.select": "Pilih organisasi untuk melanjutkan:",
  linkIdpActionTitle: "Menautkan {0}",
  linkIdpActionMessage: "Apakah Anda ingin menautkan akun Anda dengan {0}?"
};

export default messages;
