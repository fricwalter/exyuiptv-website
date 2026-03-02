@echo off
cd /d "C:\Users\admir\OneDrive\Desktop\github\Astro-rebuild-exyuiptv.org"
"C:\PROGRA~1\Git\cmd\git.exe" add src/pages/instalacija.astro src/components/Navbar.astro src/layouts/BaseLayout.astro public/logo.png
"C:\PROGRA~1\Git\cmd\git.exe" commit -m "redesign: instalacija dark mode + tabs + logo/favicon site-wide"
"C:\PROGRA~1\Git\cmd\git.exe" push origin main
