# PhotoKiosk Website Deployment

## Build Process
```bash
npm install
npm run build
```

The build outputs static HTML to the `public/` folder.

## Deployment Steps

1. Run `npm install` to install dependencies
2. Run `npm run build` to generate static HTML
3. Upload the entire `public/` folder to your web server
4. Configure your web server to serve from the `public/` folder

## Folder Structure
- `app/` — Source code (pages and components)
- `public/` — Built static HTML files (deploy this folder)
- `node_modules/` — Dependencies (do not deploy)

## Server Configuration
Point your web server root to the `public/` folder. All routes (`/`, `/features`, `/contact`) are pre-rendered as static HTML files.

## Local Testing
After build, test locally:
```bash
cd public && python3 -m http.server 8000
```

Then visit `http://localhost:8000` to verify all pages load correctly.
