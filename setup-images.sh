#!/bin/bash

# Create the necessary directories
mkdir -p public/media/mockups

# Copy the images from your media folder to the public folder
cp media/ss/account_page.jpg public/media/ss/
cp media/ss/driver_interface.jpg public/media/ss/
cp media/ss/emergency_page.jpg public/media/ss/
cp media/ss/emergeny_buttons.jpg public/media/ss/
cp "media/ss/fuel filling form.jpg" public/media/ss/
cp media/ss/job_done.jpg public/media/ss/
cp media/ss/vehicle_details_dashboard.jpg public/media/ss/

# Copy your mockup images to the public folder
# Replace these paths with the actual paths to your mockup images
cp path/to/splash-screen.jpg public/media/mockups/splash-screen.jpg
cp path/to/login-screens.jpg public/media/mockups/login-screens.jpg
cp path/to/app-features.jpg public/media/mockups/app-features.jpg

echo "Images have been copied to the public directory."
