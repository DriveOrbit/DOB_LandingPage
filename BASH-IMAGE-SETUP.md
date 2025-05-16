# Setting Up Images for DriveOrbit Website (Bash Guide)

This guide will help you set up the images for your DriveOrbit website using bash commands.

## Directory Structure

In Next.js, static files like images need to be in the `public` directory to be accessible from the browser. The path in your code should be relative to the public directory.

## Step 1: Create the Necessary Directories

```bash
# Create the public directory if it doesn't exist
mkdir -p public

# Create the media directory inside public
mkdir -p public/media

# Create the mockups directory for your phone mockups
mkdir -p public/media/mockups

# Create the ss directory for your screenshots
mkdir -p public/media/ss
```

## Step 2: Copy Your Images to the Public Directory

### For the Screenshots:
```bash
# Copy all jpg files from media/ss to public/media/ss
cp media/ss/*.jpg public/media/ss/
```

### For the Mockup Images:
```bash
# Copy your mockup images to the public/media/mockups directory
# Replace these paths with the actual paths to your mockup images
cp path/to/splash-screen.jpg public/media/mockups/splash-screen.jpg
cp path/to/login-screens.jpg public/media/mockups/login-screens.jpg
cp path/to/app-features.jpg public/media/mockups/app-features.jpg
```

## Step 3: Verify the Images

Check that the images have been copied correctly:

```bash
# List all files in the public/media/mockups directory
ls -la public/media/mockups

# List all files in the public/media/ss directory
ls -la public/media/ss
```

## Step 4: Restart the Development Server

If your development server is running, restart it to make sure the new images are properly served:

```bash
# Stop the current server (Ctrl+C) and then run:
npm run dev
```

## Troubleshooting

If your images are still not showing:

1. **Check file permissions**: Make sure the files have the correct permissions
   ```bash
   chmod 644 public/media/mockups/*.jpg
   chmod 644 public/media/ss/*.jpg
   ```

2. **Check file paths in the code**: Make sure the paths in your code match the actual file paths

3. **Check for case sensitivity**: File paths are case-sensitive in many environments

4. **Check file names**: Make sure there are no special characters or spaces in the file names

5. **Check browser cache**: Try hard-refreshing your browser (Ctrl+F5)

## Example for Your Specific Images

Based on the images you mentioned, here's how you would copy them:

```bash
# Create directories
mkdir -p public/media/mockups

# Copy the images you mentioned
cp "path/to/splash-screen.jpg" public/media/mockups/splash-screen.jpg
cp "path/to/login-screens.jpg" public/media/mockups/login-screens.jpg
cp "path/to/app-features.jpg" public/media/mockups/app-features.jpg
```

Replace `path/to/` with the actual path to your images.
