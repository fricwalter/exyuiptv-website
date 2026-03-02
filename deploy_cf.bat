@echo off
cd /d "C:\Users\admir\OneDrive\Desktop\github\Astro-rebuild-exyuiptv.org"
set CLOUDFLARE_API_TOKEN=qzUiD17YoKyhVUGfVM-s5D4SlgL7NiGO2ICwKEHz
set CLOUDFLARE_ACCOUNT_ID=21b058f792197fa0a48926aa867f845e
"C:\PROGRA~1\Git\cmd\git.exe" add src/pages/tv-lista-kanala.astro
"C:\PROGRA~1\Git\cmd\git.exe" commit -m "redesign: tv-lista-kanala dark mode + genres + VOD + sport section"
"C:\PROGRA~1\Git\cmd\git.exe" push origin main
call npm run build
call npx wrangler deploy --assets=./dist
set CLOUDFLARE_API_TOKEN=
set CLOUDFLARE_ACCOUNT_ID=
