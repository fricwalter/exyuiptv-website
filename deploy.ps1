# ================================================
#  EXYU IPTV - Deploy zu Cloudflare Workers
#  PowerShell Script - robust und einfach
# ================================================

Set-Location $PSScriptRoot

Write-Host ""
Write-Host "  ================================" -ForegroundColor Cyan
Write-Host "   EXYU IPTV - Deploy Cloudflare" -ForegroundColor Cyan
Write-Host "  ================================" -ForegroundColor Cyan
Write-Host ""

# --- Cloudflare Token aus .env.local lesen ---
$envFile = Join-Path $PSScriptRoot ".env.local"
if (-not (Test-Path $envFile)) {
    Write-Host "FEHLER: .env.local nicht gefunden!" -ForegroundColor Red
    pause; exit 1
}

$envContent = Get-Content $envFile -Raw

# Unterstützt beide Formate:
#   CLOUDFLARE_API_TOKEN=abc123
#   "CLOUDFLARE_API_TOKEN": "abc123"
$token = $null

if ($envContent -match '"CLOUDFLARE_API_TOKEN"\s*:\s*"([^"]+)"') {
    $token = $Matches[1]
} elseif ($envContent -match 'CLOUDFLARE_API_TOKEN\s*=\s*(.+)') {
    $token = $Matches[1].Trim()
}

if (-not $token) {
    Write-Host "FEHLER: CLOUDFLARE_API_TOKEN nicht in .env.local gefunden!" -ForegroundColor Red
    pause; exit 1
}

$env:CLOUDFLARE_API_TOKEN = $token
$env:CLOUDFLARE_ACCOUNT_ID = "21b058f792197fa0a48926aa867f845e"

Write-Host "[1/3] Baue Astro Projekt..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "FEHLER: Build fehlgeschlagen!" -ForegroundColor Red
    pause; exit 1
}

Write-Host ""
Write-Host "[2/3] Git commit + push..." -ForegroundColor Yellow
git add -A
$commitMsg = "deploy: update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMsg
git push origin main

Write-Host ""
Write-Host "[3/3] Deploy zu Cloudflare Workers..." -ForegroundColor Yellow
npx wrangler deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "FEHLER: Wrangler Deploy fehlgeschlagen!" -ForegroundColor Red
    $env:CLOUDFLARE_API_TOKEN = ""
    pause; exit 1
}

# Token aus Umgebung löschen
$env:CLOUDFLARE_API_TOKEN = ""

Write-Host ""
Write-Host "  OK Deploy erfolgreich!" -ForegroundColor Green
Write-Host "  https://exyuiptv.org" -ForegroundColor Green
Write-Host ""
Read-Host "Drücke Enter zum Beenden"
