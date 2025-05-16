#!/bin/bash

# Create the necessary directories
mkdir -p public/media/ss

# Remove any existing files to start fresh
rm -f public/media/ss/*.jpg

# Copy each screenshot individually with verbose output
echo "Copying account_page.jpg..."
cp -v media/ss/account_page.jpg public/media/ss/

echo "Copying driver_interface.jpg..."
cp -v media/ss/driver_interface.jpg public/media/ss/

echo "Copying emergency_page.jpg..."
cp -v media/ss/emergency_page.jpg public/media/ss/

echo "Copying emergeny_buttons.jpg..."
cp -v media/ss/emergeny_buttons.jpg public/media/ss/

echo "Copying fuel filling form.jpg..."
cp -v "media/ss/fuel filling form.jpg" public/media/ss/

echo "Copying job_done.jpg..."
cp -v media/ss/job_done.jpg public/media/ss/

# Check if vehicle_details_dashboard.jpg exists and copy it if it does
if [ -f "media/ss/vehicle_details_dashboard.jpg" ]; then
  echo "Copying vehicle_details_dashboard.jpg..."
  cp -v media/ss/vehicle_details_dashboard.jpg public/media/ss/
else
  echo "Warning: vehicle_details_dashboard.jpg not found in media/ss folder"
fi

# List all files in the public/media/ss directory to verify
echo "Files in public/media/ss directory:"
ls -la public/media/ss/

echo "All screenshots have been copied to the public directory."
