@echo off
set PATH=C:\Users\Sol\AppData\Local\GitHubDesktop\app-3.6.3\resources\app\git\cmd;%PATH%
git config --global credential.helper manager
git add .
if "%~1"=="" (
    git commit -m "auto-deploy"
) else (
    git commit -m "%~1"
)
git push origin main --quiet
echo ====================================================
echo SUCCESS: Code pushed automatically to GitHub and Vercel!
echo ====================================================
