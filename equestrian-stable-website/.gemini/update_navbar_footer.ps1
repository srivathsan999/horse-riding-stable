# PowerShell script to update navbar and footer across all HTML files
# This script updates the remaining HTML files with consistent navbar and footer

$files = @(
    "lessons.html",
    "about.html",
    "facilities.html",
    "pricing.html",
    "gallery.html",
    "blog.html",
    "home-2.html",
    "404.html",
    "login.html",
    "signup.html"
)

Write-Host "Files to update: $($files.Count)" -ForegroundColor Green
Write-Host "This script will standardize navbar and footer across all pages" -ForegroundColor Yellow
