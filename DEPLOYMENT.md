# HostGator Deployment Instructions

This project has been converted to a static website that can be deployed to HostGator or any static hosting provider.

## Building for Production

1. Run the build command:
   ```bash
   npm run build
   ```

2. This creates a `dist/` folder with all the static files needed for deployment.

## Deploying to HostGator

### Method 1: File Manager (Recommended)
1. Log into your HostGator cPanel
2. Open **File Manager**
3. Navigate to your domain's `public_html` folder
4. Upload all files from the `dist/` folder to `public_html/`
   - Upload `index.html`
   - Upload the entire `assets/` folder
   - Upload `.htaccess` (this handles SPA routing)

### Method 2: FTP
1. Use an FTP client (like FileZilla)
2. Connect to your HostGator hosting account
3. Upload all contents of the `dist/` folder to the `public_html/` directory

## Important Files

- **index.html** - Main entry point
- **assets/** - Contains CSS and JavaScript bundles
- **.htaccess** - Handles client-side routing (CRITICAL for SPA functionality)

## Verification

After uploading, visit your domain. The website should load properly and all internal navigation should work correctly.

## Notes

- The `.htaccess` file is crucial for single-page application routing
- All assets are bundled and optimized for production
- No server-side code is required - this is a fully static website
- The build includes all necessary CSS and JavaScript in the assets folder

## Troubleshooting

If routes don't work properly:
1. Ensure `.htaccess` was uploaded to the root directory
2. Verify that your HostGator plan supports `.htaccess` files
3. Check that mod_rewrite is enabled on your server (standard on most HostGator plans)
