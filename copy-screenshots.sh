#!/bin/bash

# Create the necessary directories
mkdir -p public/media/ss
mkdir -p public/media/mockups

# Copy all screenshots from media/ss to public/media/ss
cp media/ss/*.jpg public/media/ss/

# Copy the mockup images to the public directory
# Replace these paths with the actual paths to your mockup images
cp "path/to/splash-screen.jpg" public/media/mockups/splash-screen.jpg
cp "path/to/login-screens.jpg" public/media/mockups/login-screens.jpg
cp "path/to/app-features.jpg" public/media/mockups/app-features.jpg

echo "All screenshots have been copied to the public directory."
