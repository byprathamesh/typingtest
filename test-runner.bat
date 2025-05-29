@echo off
echo ⚡ Minimal Typing Test - Test Runner ⚡
echo =====================================
echo.

echo Starting local development server...
echo.

echo Choose your preferred method:
echo 1. Python HTTP Server (if Python is installed)
echo 2. Open directly in browser
echo 3. Node.js HTTP Server (if Node.js is installed)
echo.

set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo Starting Python HTTP server on port 8080...
    python -m http.server 8080
) else if "%choice%"=="2" (
    echo Opening in default browser...
    start index.html
) else if "%choice%"=="3" (
    echo Installing and starting Node.js HTTP server...
    npx http-server . -p 8080 -c-1 -o
) else (
    echo Invalid choice. Opening in browser...
    start index.html
)

echo.
echo Test completed! 
echo Visit http://localhost:8080 if using a server
pause 