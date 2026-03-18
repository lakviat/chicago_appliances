# Chicago Appliances Repair

Static marketing website and appointment-booking flow for **Chicago Appliances Repair**.

Live website: [chicagoappliance-repair.com](https://chicagoappliance-repair.com/)  
Book appointment: [chicagoappliance-repair.com/book-appointment/](https://chicagoappliance-repair.com/book-appointment/)

## Overview

This project is a custom-coded replacement for the original WordPress site, rebuilt as a lightweight static site for deployment on **GitHub Pages**.

It includes:

- a homepage styled to match the existing brand and layout
- a dedicated `/book-appointment/` flow
- mobile-friendly navigation and CTA structure
- Web3Forms-ready contact and appointment submission
- GitHub Pages deployment with custom domain support
- SEO basics including sitemap, robots, canonicals, and structured data

## Pages

- `/`  
  Main marketing homepage with hero section, services, trust sections, contact form, footer details, and floating contact widget

- `/book-appointment/`  
  Multi-step appointment request page where customers can choose:
  - appliance type
  - date
  - time slot
  - contact information

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages
- GitHub Actions
- Web3Forms

## Key Features

- custom domain ready: `chicagoappliance-repair.com`
- static deployment, no backend required
- appointment requests sent by email
- dynamic date generation on the booking page
- cache-busted CSS and JS asset loading
- reusable marketing and keyword config

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── book-appointment/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── assets/
│   └── live/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── CNAME
├── sitemap.xml
├── robots.txt
└── marketing-config.json
```

## Local Development

Run the site locally:

```bash
npm run dev
```

Then open:

```text
http://localhost:4173/
```

## Deployment

Deployment is handled by GitHub Actions and GitHub Pages.

Important domain files already included:

- `CNAME`
- `.nojekyll`
- `.github/workflows/deploy.yml`
- `robots.txt`
- `sitemap.xml`

## Configuration Notes

- Web3Forms access key is still a placeholder until production credentials are added.
- Google Ads / SEO planning keywords are stored in `marketing-config.json`.
- The booking flow currently allows duplicate time selections by design.

## Business Information

**Chicago Appliances Repair**  
Chicago, Illinois  
Phone: [(872) 710-3947](tel:+18727103947)  
Email: [chicagoapprepair@gmail.com](mailto:chicagoapprepair@gmail.com)

## Status

This repository is the active codebase for the public site and future iterations, including:

- visual refinements
- Web3Forms production setup
- analytics and ads integration
- additional landing pages

