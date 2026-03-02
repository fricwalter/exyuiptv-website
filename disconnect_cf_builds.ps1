# ================================================
#  EXYU IPTV - Cloudflare Workers Builds trennen
#  Loescht die GitHub CI/CD Integration per API
# ================================================

Set-Location $PSScriptRoot

Write-Host ""
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host "   Cloudflare Workers Builds - Disconnect" -ForegroundColor Cyan
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host ""

# --- Token aus .env.local lesen ---
$envFile = Join-Path $PSScriptRoot ".env.local"
if (-not (Test-Path $envFile)) {
    Write-Host "FEHLER: .env.local nicht gefunden!" -ForegroundColor Red
    pause; exit 1
}

$envContent = Get-Content $envFile -Raw
$token = $null

if ($envContent -match '"CLOUDFLARE_API_TOKEN"\s*:\s*"([^"]+)"') {
    $token = $Matches[1]
} elseif ($envContent -match 'CLOUDFLARE_API_TOKEN\s*=\s*(.+)') {
    $token = $Matches[1].Trim()
}

if (-not $token) {
    Write-Host "FEHLER: CLOUDFLARE_API_TOKEN nicht gefunden in .env.local!" -ForegroundColor Red
    pause; exit 1
}

Write-Host "Token gefunden. Verbinde mit Cloudflare API..." -ForegroundColor DarkGray
Write-Host ""

$accountId  = "21b058f792197fa0a48926aa867f845e"
$workerName = "exyuiptv-website"
$headers    = @{
    "Authorization" = "Bearer $token"
    "Content-Type"  = "application/json"
}

# -----------------------------------------------
# SCHRITT 1: Aktuelle Builds-Konfiguration lesen
# -----------------------------------------------
Write-Host "[1/3] Lese aktuelle Builds-Konfiguration..." -ForegroundColor Yellow

try {
    $getUrl = "https://api.cloudflare.com/client/v4/accounts/$accountId/workers/services/$workerName/builds/configuration"
    $current = Invoke-RestMethod -Uri $getUrl -Method GET -Headers $headers -ErrorAction Stop

    if ($current.success) {
        Write-Host "  Aktuelle Konfiguration gefunden:" -ForegroundColor Green
        $current.result | ConvertTo-Json -Depth 3 | Write-Host -ForegroundColor DarkGray
    } else {
        Write-Host "  Keine Builds-Konfiguration gefunden (evtl. schon getrennt)" -ForegroundColor Yellow
        $current.errors | ForEach-Object { Write-Host "  $_" -ForegroundColor DarkGray }
    }
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    if ($statusCode -eq 404) {
        Write-Host "  Keine Builds-Konfiguration vorhanden (404) - evtl. schon deaktiviert." -ForegroundColor Yellow
    } else {
        Write-Host "  GET fehlgeschlagen: $($_.Exception.Message)" -ForegroundColor DarkGray
    }
}

Write-Host ""

# -----------------------------------------------
# SCHRITT 2: Builds deaktivieren (disable)
# -----------------------------------------------
Write-Host "[2/3] Deaktiviere automatische Builds (disable_builds=true)..." -ForegroundColor Yellow

try {
    $patchUrl  = "https://api.cloudflare.com/client/v4/accounts/$accountId/workers/services/$workerName/builds/configuration"
    $patchBody = '{"disable_builds": true}'
    $patchRes  = Invoke-RestMethod -Uri $patchUrl -Method PATCH -Headers $headers -Body $patchBody -ErrorAction Stop

    if ($patchRes.success) {
        Write-Host "  OK Automatische Builds deaktiviert!" -ForegroundColor Green
    } else {
        Write-Host "  PATCH-Fehler:" -ForegroundColor Red
        $patchRes.errors | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
    }
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    Write-Host "  PATCH fehlgeschlagen (Status $statusCode): $($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host "  Versuche DELETE..." -ForegroundColor DarkGray

    # Fallback: DELETE
    try {
        $delUrl = "https://api.cloudflare.com/client/v4/accounts/$accountId/workers/services/$workerName/builds/configuration"
        $delRes = Invoke-RestMethod -Uri $delUrl -Method DELETE -Headers $headers -ErrorAction Stop

        if ($delRes.success) {
            Write-Host "  OK Builds-Konfiguration geloescht (DELETE)!" -ForegroundColor Green
        } else {
            Write-Host "  DELETE-Fehler:" -ForegroundColor Red
            $delRes.errors | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
        }
    } catch {
        Write-Host "  DELETE auch fehlgeschlagen: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host ""
        Write-Host "  Bitte manuell im Dashboard:" -ForegroundColor Yellow
        Write-Host "  dash.cloudflare.com -> Workers & Pages -> exyuiptv-website" -ForegroundColor White
        Write-Host "  -> Settings -> Builds -> Disconnect" -ForegroundColor White
    }
}

Write-Host ""

# -----------------------------------------------
# SCHRITT 3: Verifikation
# -----------------------------------------------
Write-Host "[3/3] Verifikation - Lese neue Konfiguration..." -ForegroundColor Yellow

try {
    $verUrl = "https://api.cloudflare.com/client/v4/accounts/$accountId/workers/services/$workerName/builds/configuration"
    $verRes = Invoke-RestMethod -Uri $verUrl -Method GET -Headers $headers -ErrorAction Stop

    if ($verRes.success) {
        $disabled = $verRes.result.disable_builds
        if ($disabled -eq $true) {
            Write-Host "  OK Builds sind jetzt DEAKTIVIERT (disable_builds=true)" -ForegroundColor Green
        } else {
            Write-Host "  INFO: disable_builds = $disabled" -ForegroundColor Yellow
            $verRes.result | ConvertTo-Json | Write-Host -ForegroundColor DarkGray
        }
    } elseif ($verRes.errors[0].code -eq 10007 -or $verRes.errors[0].message -match "not found") {
        Write-Host "  OK Konfiguration nicht mehr vorhanden (erfolgreich geloescht)" -ForegroundColor Green
    }
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    if ($statusCode -eq 404) {
        Write-Host "  OK Konfiguration nicht mehr vorhanden (404 = erfolgreich geloescht)" -ForegroundColor Green
    } else {
        Write-Host "  Verifikation nicht moeglich: $($_.Exception.Message)" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "  ============================================" -ForegroundColor Green
Write-Host "   Fertig! Git push loest jetzt KEIN" -ForegroundColor Green
Write-Host "   automatisches Cloudflare-Build mehr aus." -ForegroundColor Green
Write-Host "   Deployment nur noch via deploy.bat" -ForegroundColor Green
Write-Host "  ============================================" -ForegroundColor Green
Write-Host ""
Read-Host "Druecke Enter zum Beenden"
