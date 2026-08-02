@echo off
set PATH=C:\Users\Sol\AppData\Local\GitHubDesktop\app-3.6.3\resources\app\git\cmd;%PATH%
if "%~1"=="" (
    set MSG=update-website
) else (
    set MSG=%~1
)
git add .
git commit -m "%MSG%"
git push origin main
echo ====================================
echo SUCCESS: Code pushed to GitHub and Vercel!
echo ====================================
