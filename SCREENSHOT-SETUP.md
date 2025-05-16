# Setting Up Screenshots for DriveOrbit Website

This guide will help you set up the screenshots for your DriveOrbit website.

## Current Screenshots

Based on the files in your `media/ss` folder, we have the following screenshots:

1. `account_page.jpg` - Shows the account page interface
2. `driver_interface.jpg` - Shows the driver interface
3. `emergency_page.jpg` - Shows the emergency page
4. `emergeny_buttons.jpg` - Shows the emergency buttons
5. `fuel filling form.jpg` - Shows the fuel filling form
6. `job_done.jpg` - Shows the job completion screen

## Setting Up the Screenshots

To make these screenshots visible on your website, you need to copy them to the public directory:

### Using Bash Commands

```bash
# Create the necessary directories
mkdir -p public/media/ss

# Copy all screenshots from media/ss to public/media/ss
cp media/ss/*.jpg public/media/ss/
```

### Using the Provided Script

For convenience, you can use the `copy-screenshots.sh` script:

1. Make the script executable:
   ```bash
   chmod +x copy-screenshots.sh
   ```

2. Run the script:
   ```bash
   ./copy-screenshots.sh
   ```

## Adding New Screenshots

If you want to add new screenshots:

1. Add the new screenshot to the `media/ss` folder
2. Copy it to the `public/media/ss` folder:
   ```bash
   cp "media/ss/new-screenshot.jpg" public/media/ss/
   ```
3. Update the code in `app/page.tsx` to include the new screenshot

## Troubleshooting

If your screenshots are not displaying:

1. **Check file paths**: Make sure the paths in the code match the actual file paths
2. **Check file permissions**: Make sure the files have the correct permissions
   ```bash
   chmod 644 public/media/ss/*.jpg
   ```
3. **Check for spaces in filenames**: If a filename has spaces, make sure it's properly quoted in the code
4. **Restart the development server**: Sometimes changes to the public directory require a server restart
   ```bash
   npm run dev
   ```

## Current Implementation

The screenshots are displayed in the About section slider with the following features:

- Large size (450px height) for better visibility
- Descriptive captions below each image
- Hover animations for interactivity
- Consistent styling with the rest of the site

The order of the screenshots in the slider matches the order listed above.
