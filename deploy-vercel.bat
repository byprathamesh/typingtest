@echo off
echo 🚀 Deploying Minimal Typing Test to Vercel 🚀
echo =============================================
echo.

echo Checking if Vercel CLI is installed...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo Failed to install Vercel CLI. Please install Node.js first.
        echo Visit: https://nodejs.org/
        pause
        exit /b 1
    )
)

echo.
echo Vercel CLI found! Starting deployment...
echo.

echo Your typing test will be deployed with these features:
echo ✅ Red error indicators for wrong words/characters
echo ✅ Achievement system with milestones
echo ✅ Floating WPM indicator
echo ✅ Progress tracking bar
echo ✅ Typing streak indicators
echo ✅ Burst WPM detection
echo ✅ Perfect accuracy celebrations
echo ✅ Smooth animations and transitions
echo ✅ Theme toggle (dark/light)
echo ✅ 6 difficulty levels
echo ✅ Professional sound effects
echo.

echo Starting Vercel deployment...
vercel --prod

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment successful! 🎉
    echo Your typing test is now live on Vercel!
    echo.
    echo Next steps:
    echo 1. Test your live site
    echo 2. Share the URL with friends
    echo 3. Monitor performance in Vercel dashboard
    echo.
) else (
    echo.
    echo ❌ Deployment failed. Please check the error above.
    echo.
    echo Troubleshooting tips:
    echo 1. Make sure you're logged into Vercel: vercel login
    echo 2. Check your internet connection
    echo 3. Verify all files are committed to git
    echo.
)

pause 