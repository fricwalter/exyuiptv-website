@echo off
cd /d "C:\Users\admir\OneDrive\Desktop\github\Astro-rebuild-exyuiptv.org"
echo [1/2] Building...
call npm run build
echo [2/2] Deploying to Cloudflare Workers...
call npx wrangler deploy --assets=./dist
echo Done!
