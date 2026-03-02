@echo off
cd /d "C:\Users\admir\OneDrive\Desktop\github\Astro-rebuild-exyuiptv.org"

echo.
echo  ================================
echo   EXYU IPTV - Deploy zu Cloudflare
echo  ================================
echo.

REM Cloudflare Token aus .env.local lesen
for /f "tokens=2 delims=: " %%a in ('findstr /i "CLOUDFLARE_API_TOKEN" .env.local') do set RAWTOKEN=%%a
set CLOUDFLARE_API_TOKEN=%RAWTOKEN:"=%
set CLOUDFLARE_ACCOUNT_ID=21b058f792197fa0a48926aa867f845e

if "%CLOUDFLARE_API_TOKEN%"=="" (
    echo FEHLER: CLOUDFLARE_API_TOKEN nicht in .env.local gefunden!
    pause
    exit /b 1
)

echo [1/3] Baue Astro Projekt...
call npm run build
if errorlevel 1 (
    echo.
    echo FEHLER: Build fehlgeschlagen! Prüfe die Fehlermeldung oben.
    pause
    exit /b 1
)

echo.
echo [2/3] Git commit + push...
"C:\Program Files\Git\cmd\git.exe" add -A
"C:\Program Files\Git\cmd\git.exe" commit -m "deploy: update %DATE% %TIME%"
"C:\Program Files\Git\cmd\git.exe" push origin main

echo.
echo [3/3] Deploy zu Cloudflare Workers...
call npx wrangler deploy
if errorlevel 1 (
    echo.
    echo FEHLER: Wrangler Deploy fehlgeschlagen!
    pause
    exit /b 1
)

REM Token aus Umgebung löschen
set CLOUDFLARE_API_TOKEN=

echo.
echo  ✅ Deploy erfolgreich!
echo  🌐 https://exyuiptv.org
echo.
pause
