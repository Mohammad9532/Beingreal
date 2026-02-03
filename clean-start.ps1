# BeingReal Clean Start Script
# Run this if you encounter "Cannot find module" or styling issues.

Write-Host "Cleaning Next.js cache..." -ForegroundColor Cyan
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

Write-Host "Restarting Development Server..." -ForegroundColor Green
npm run dev
