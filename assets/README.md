# Repo-only Assets (not packaged)

Place here any assets you want to keep in the repository but DO NOT want to ship inside the installer/app.

This folder is excluded from packaging by electron-builder (see package.json build.files: "!assets/**").

Suggested structure:
- branding/
  - matriks-logo-source.png
  - icons-source/*.png
- email-icons/
  - website.png
  - location.png
  - phone.png
  - linkedin.png
  - facebook.png
  - twitter-x.png
  - instagram.png
  - youtube.png
- docs/
  - screenshots/
  - design-notes.md

Note: Only keep in `build/` what the app actually uses at runtime (e.g., `app-icon.ico`, `matriks-logo.png`).
