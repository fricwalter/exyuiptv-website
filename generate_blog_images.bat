@echo off
REM ============================================================
REM  Blog Image Generator - exyuiptv.org
REM  DALL-E 3 via OpenAI API
REM  Doppelklick zum Starten!
REM ============================================================

echo.
echo  ========================
echo   Blog Image Generator
echo   exyuiptv.org - DALL-E 3
echo  ========================
echo.

REM API Key aus .env.local lesen
for /f "tokens=2 delims=: " %%a in ('findstr /i "OPENAI_API_TOKEN" .env.local') do (
    set RAWKEY=%%a
)

REM Anführungszeichen entfernen
set OPENAI_API_KEY=%RAWKEY:"=%

if "%OPENAI_API_KEY%"=="" (
    echo FEHLER: OPENAI_API_TOKEN nicht in .env.local gefunden!
    pause
    exit /b 1
)

echo  Key geladen. Starte Generierung...
echo.

REM Dependencies prüfen und installieren
python -m pip install openai requests --quiet

REM Script starten
set OPENAI_API_KEY=%OPENAI_API_KEY%
python generate_blog_images.py

echo.
pause
