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
echo ✅ Pure black and white monochrome design
echo ✅ Smooth caret tracking and animations
echo ✅ 6 difficulty levels (Easy, Normal, Hard, Quotes, Numbers, Punctuation)
echo ✅ Real-time WPM and accuracy tracking
echo ✅ Professional sound effects with Web Audio API
echo ✅ Speed graphs with Chart.js
echo ✅ Theme toggle (dark/light)
echo ✅ Keyboard shortcuts and settings persistence
echo ✅ Mobile-responsive design
echo ✅ Error-resistant DOM handling
echo.

echo Starting Vercel deployment with automatic configuration...
vercel --prod --yes

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment successful! 🎉
    echo Your typing test is now live on Vercel!
    echo.
    echo Features deployed:
    echo • Error-resistant DOM element handling
    echo • Improved initialization with fallbacks
    echo • Enhanced event listener error checking
    echo • Mobile-optimized responsive design
    echo • Professional-grade typing test
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
    echo 4. Try manual deployment: vercel --prod
    echo.
)

pause 