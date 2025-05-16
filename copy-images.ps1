# Create the mockups directory if it doesn't exist
$mockupsDir = "public\media\mockups"
if (-not (Test-Path $mockupsDir)) {
    New-Item -ItemType Directory -Path $mockupsDir -Force
}

# Save the first image (splash screen)
$splashScreenPath = Join-Path $mockupsDir "splash-screen.jpg"
$splashScreenContent = [System.Convert]::FromBase64String("YOUR_BASE64_STRING_HERE")
[System.IO.File]::WriteAllBytes($splashScreenPath, $splashScreenContent)

# Save the second image (login screens)
$loginScreensPath = Join-Path $mockupsDir "login-screens.jpg"
$loginScreensContent = [System.Convert]::FromBase64String("YOUR_BASE64_STRING_HERE")
[System.IO.File]::WriteAllBytes($loginScreensPath, $loginScreensContent)

# Save the third image (app features)
$appFeaturesPath = Join-Path $mockupsDir "app-features.jpg"
$appFeaturesContent = [System.Convert]::FromBase64String("YOUR_BASE64_STRING_HERE")
[System.IO.File]::WriteAllBytes($appFeaturesPath, $appFeaturesContent)

Write-Host "Images have been saved to the public directory."
