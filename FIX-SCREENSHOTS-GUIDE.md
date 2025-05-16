# Comprehensive Guide to Fix Screenshot Issues

This guide will help you fix any issues with screenshots not displaying on your DriveOrbit website.

## Current Setup

Your website is set up to display:
1. Phone mockups (3 images)
2. Screenshots from your media/ss folder (6 images)

## Issue: Some Screenshots Not Visible

If some screenshots are not visible, follow these steps to fix the issue:

## Solution 1: Copy Screenshots to Public Directory

The most common reason for screenshots not displaying is that they haven't been copied to the public directory.

```bash
# Create the necessary directories
mkdir -p public/media/ss

# Copy all screenshots from media/ss to public/media/ss
cp media/ss/*.jpg public/media/ss/
```

## Solution 2: Fix File Paths

Make sure the file paths in the code match the actual file paths:

1. Check if the file names in the code match the actual file names (case-sensitive)
2. Check if there are any spaces in the file names (if so, they need to be properly encoded)

## Solution 3: Use Direct URLs

If the above solutions don't work, you can use direct URLs to the images:

1. Upload your images to an image hosting service like Imgur
2. Replace the image paths in the code with the direct URLs

Example:
```jsx
src="https://i.imgur.com/YourImageID.jpg"
```

## Solution 4: Fix File Permissions

Make sure the files have the correct permissions:

```bash
chmod 644 public/media/ss/*.jpg
```

## Solution 5: Clear Browser Cache

Sometimes the browser caches old versions of images. Try:

1. Hard-refreshing your browser (Ctrl+F5)
2. Clearing your browser cache
3. Testing in a different browser

## Solution 6: Check for Missing Files

Make sure all the files referenced in the code actually exist:

```bash
# List all files in the media/ss directory
ls -la media/ss/

# List all files in the public/media/ss directory
ls -la public/media/ss/
```

## Solution 7: Restart Development Server

Sometimes changes to the public directory require a server restart:

```bash
# Stop the current server (Ctrl+C) and then run:
npm run dev
```

## Current Implementation

We've updated the code to use direct Imgur URLs for the phone mockups to ensure they display correctly. For the screenshots, we're still using the local file paths.

If you want to switch back to using local files for the phone mockups:

1. Save your mockup images to:
   - `public/media/mockups/splash-screen.jpg`
   - `public/media/mockups/login-screens.jpg`
   - `public/media/mockups/app-features.jpg`

2. Update the image paths in the code:
   ```jsx
   src="/media/mockups/splash-screen.jpg"
   src="/media/mockups/login-screens.jpg"
   src="/media/mockups/app-features.jpg"
   ```

## Need More Help?

If you're still having issues after trying these solutions, please provide more details about:
1. Which specific screenshots are not displaying
2. Any error messages in the browser console
3. The exact file names in your media/ss folder
