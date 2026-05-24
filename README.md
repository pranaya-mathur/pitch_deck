<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Sovereign AI Deck

This repo contains a static Vite + React presentation app for the Sovereign-AI deck.

## Local Development

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
3. Build the app:
   `npm run build`

## Deploy To Vercel

This project is configured for static deployment on Vercel.

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. In Vercel, create a new project and import the repository.
3. Use the default settings:
   `Framework Preset: Vite`
   `Build Command: npm run build`
   `Output Directory: dist`
4. Deploy.

You can also deploy from the CLI:

1. Install the CLI:
   `npm i -g vercel`
2. Deploy:
   `vercel`
3. For production:
   `vercel --prod`

## Environment Variables

No environment variables are currently required for this app to build or run on Vercel.
