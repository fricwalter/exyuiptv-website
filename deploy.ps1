# ================================================
#  EXYU IPTV - Deploy zu Cloudflare Workers
#  PowerShell Script
#  Trennt git push von wrangler deploy!
# ================================================

Set-Location $PSScriptRoot

Write-Host ""
Write-Host "  ================================" -ForegroundColor Cyan
Write-Host "   EXYU IPTV - Deploy Cloudflare" -ForegroundColor Cyan
Write-Host "  ================================" -ForegroundColor Cyan
Write-Host ""

# --- Token aus .env.local lesen ---
$envFile = Join-Path $PSScriptRoot ".env.local"
$envContent = Get-Content $envFile -Raw

$token = $null
if ($envContent -match '"CLOUDFLARE_API_TOKEN"\s*:\s*"([^"]+)"') {
    $token = $Matches[1]
} elseif ($envContent -match 'CLOUDFLARE_API_TOKEN\s*=\s*(.+)') {
    $token = $Matches[1].Trim()
}

if (-not $token) {
    Write-Host "FEHLER: CLOUDFLARE_API_TOKEN nicht gefunden!" -ForegroundColor Red
    pause; exit 1
}

$env:CLOUDFLARE_API_TOKEN = $token
$env:CLOUDFLARE_ACCOUNT_ID = "21b058f792197fa0a48926aa867f845e"

# -----------------------------------------------
# SCHRITT 1: Build
# -----------------------------------------------
Write-Host "[1/3] Baue Astro Projekt..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "FEHLER: Build fehlgeschlagen!" -ForegroundColor Red
    $env:CLOUDFLARE_API_TOKEN = ""
    pause; exit 1
}

# -----------------------------------------------
# SCHRITT 2: Cloudflare Deploy (KEIN git push!)
# -----------------------------------------------
Write-Host ""
Write-Host "[2/3] Deploy zu Cloudflare Workers..." -ForegroundColor Yellow
npx wrangler deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "FEHLER: Wrangler Deploy fehlgeschlagen!" -ForegroundColor Red
    $env:CLOUDFLARE_API_TOKEN = ""
    pause; exit 1
}

$env:CLOUDFLARE_API_TOKEN = ""

Write-Host ""
Write-Host "  OK Deploy erfolgreich!" -ForegroundColor Green
Write-Host "  https://exyuiptv.org" -ForegroundColor Green
Write-Host ""

# -----------------------------------------------
# SCHRITT 3: Git push OPTIONAL (getrennt!)
# -----------------------------------------------
Write-Host "[3/3] Git push zu GitHub?" -ForegroundColor Yellow
Write-Host "  (Tipp: Solange der CF Build-Token kaputt ist, besser 'N' drücken)" -ForegroundColor DarkGray
$antwort = Read-Host "  Code auch zu GitHub pushen? (J/N)"

if ($antwort -eq "J" -or $antwort -eq "j") {
    git add -A
    $commitMsg = "deploy: update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git commit -m $commitMsg
    git push origin main
    Write-Host "  GitHub: OK" -ForegroundColor Green
} else {
    Write-Host "  GitHub: übersprungen" -ForegroundColor DarkGray
}

Write-Host ""
Read-Host "Drücke Enter zum Beenden"
