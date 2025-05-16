# How to Save the Mockup Images

To make the new mockup images work in the slider, you need to save them to the correct location in your project. Follow these steps:

## Step 1: Save the Images

1. Save the first image (splash screen with DriveOrbit logo) as:
   ```
   public/media/mockups/splash-screen.jpg
   ```

2. Save the second image (login screens side by side) as:
   ```
   public/media/mockups/login-screens.jpg
   ```

3. Save the third image (multiple app screens showing features) as:
   ```
   public/media/mockups/app-features.jpg
   ```

## Step 2: Verify the Images

After saving the images, make sure they are in the correct location by checking:
```
dir public\media\mockups
```

You should see the three image files listed.

## Step 3: Restart the Development Server

If your development server is running, restart it to make sure the new images are properly served:
```
npm run dev
```

## Step 4: View Your Website

Open your website in a browser and check that the new images appear in the slider in the About section.

## Troubleshooting

If the images don't appear:
1. Check that the file paths are correct
2. Make sure the image files are properly saved (not corrupted)
3. Verify that the file names match exactly what's in the code
4. Check the browser console for any errors
