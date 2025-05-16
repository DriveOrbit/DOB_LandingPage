# How to Add Your Images to the DriveOrbit Website

This guide will help you properly add the phone mockup images to your website.

## Method 1: Using the Public Directory (Recommended)

### Step 1: Create the Directory Structure
```
mkdir -p public\media\mockups
```

### Step 2: Copy Your Images
Copy the three images you shared to the following locations:

1. Splash Screen Image:
```
public\media\mockups\splash-screen.jpg
```

2. Login Screens Image:
```
public\media\mockups\login-screens.jpg
```

3. App Features Image:
```
public\media\mockups\app-features.jpg
```

### Step 3: Update the Code
Update the image paths in `app\page.tsx` to:

```jsx
// First image
src="/media/mockups/splash-screen.jpg"

// Second image
src="/media/mockups/login-screens.jpg"

// Third image
src="/media/mockups/app-features.jpg"
```

## Method 2: Using GitHub URLs

If you've already committed these images to your GitHub repository, you can use direct GitHub URLs:

```jsx
// First image
src="https://github.com/DriveOrbit/DOB_LandingPage/raw/master/media/mockups/splash-screen.jpg"

// Second image
src="https://github.com/DriveOrbit/DOB_LandingPage/raw/master/media/mockups/login-screens.jpg"

// Third image
src="https://github.com/DriveOrbit/DOB_LandingPage/raw/master/media/mockups/app-features.jpg"
```

## Method 3: Using Image Hosting Services

You can upload your images to an image hosting service like Imgur and use those URLs:

```jsx
// Example URLs (replace with your actual uploaded image URLs)
src="https://i.imgur.com/YourImageID1.jpg"
src="https://i.imgur.com/YourImageID2.jpg"
src="https://i.imgur.com/YourImageID3.jpg"
```

## Troubleshooting

If your images are not displaying:

1. **Check the file paths**: Make sure the paths match exactly where you saved the images
2. **Verify file names**: Ensure the file names in the code match your actual file names
3. **Check file formats**: Make sure you're using supported formats (jpg, png, etc.)
4. **Inspect browser console**: Look for any 404 errors that might indicate missing files
5. **Restart the development server**: Sometimes changes to the public directory require a server restart

## Current Implementation

Currently, we're using placeholder Imgur URLs. To replace them with your actual images:

1. Open `app\page.tsx`
2. Find the image URLs around lines 492, 504, and 516
3. Replace them with the correct URLs for your images

Example of what to look for:
```jsx
src="https://i.imgur.com/Yx3oUVS.jpg"
```

Replace with your actual image URL or path.
