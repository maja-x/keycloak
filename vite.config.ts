import { keycloakify } from "keycloakify/vite-plugin";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    keycloakify({
      accountThemeImplementation: "none",
      environmentVariables: [
        {
          name: "SHADCN_THEME_LOGO_WHITE_URL",
          default: "https://admin-bpi.maja.id/assets/img/logo-bsi.png",
        },
        {
          name: "SHADCN_THEME_LOGO_DARK_URL",
          default: "https://static.maja.id/maja-dark.png",
        },
        { name: "SHADCN_THEME_APP_NAME", default: "Maja.ID" },
        { name: "SHADCN_THEME_LAYOUT", default: "image-aside" },
        { name: "SHADCN_THEME_SIDE_IMAGE_URL", default: "https://static.maja.id/login-bg-maja.png" },
        { name: "SHADCN_THEME_PRESET", default: "neutral" },
        { name: "SHADCN_THEME_BASE", default: "neutral" },
        { name: "SHADCN_THEME_RADIUS", default: "default" },
        { name: "SHADCN_THEME_FONT", default: "geist" },
        { name: "SHADCN_THEME_PLACEHOLDER", default: "true" },
      ],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
