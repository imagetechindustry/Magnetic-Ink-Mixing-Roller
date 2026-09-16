# ImageTech Industries - Centralized Multi-Tenant Backend API

Centralized Express + MongoDB API supporting all ImageTech brand websites:
- `inkmixingroller.com`
- `stroboscopelight.com`
- `barcoater.com`
- `teflondam.com`
- `doctorblade.co.in`

## Features
- **Dynamic Multi-Tenant Sitemap Generator (`/sitemap.xml`)**: Serves site-specific XML sitemaps for all 5 domains based on `?domain=...`, origin headers, or host.
- **Unified Location Management (`/api/locations`)**: Single shared directory of Indian cities and states powering programmatic SEO on all websites.
- **Multi-Tenant Leads & Quotes (`/api/forms/quote`, `/api/forms/contact`)**: Automatically tracks which website each quote or contact form originated from.
- **Admin Dashboard API (`/api/admin`)**: Filter and manage inquiries across all websites from one single dashboard.

## Setup & Run Locally
```bash
cd server
npm install
npm run dev
```

## Deploying to Render / Railway / DigitalOcean
1. Push to a new GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit for centralized ImageTech backend"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Set Environment Variables in your hosting provider:
   - `PORT=3001`
   - `MONGODB_URI=<your-mongodb-connection-string>`
   - `JWT_SECRET=<your-jwt-secret>`
   - `ADMIN_USERNAME=admin`
   - `ADMIN_PASSWORD=<your-admin-password>`
