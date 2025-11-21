# NextGen NFT Marketplace

A modern, client-first NFT marketplace demo built with Vite + React and Tailwind CSS. This repository contains a frontend app, a small backend scaffold (in `/backend`) and example/mock data for local development.

This project is a UI + demo backend for exploring NFT marketplace flows (listing, browsing, basic mint UI). It is not a production-ready smart-contract deployment.

## Highlights

- React + Vite frontend with Tailwind CSS for styling
- Minimal Node backend scaffold in `/backend` (runs with `nodemon`)

## Tech stack

- Frontend: React (18+) with Vite
- Styling: Tailwind CSS
- Mock API: (uses `data/db.json`)
- Backend: Node.js (ESM) in `/backend`

## Repo layout (important paths)

- `index.html`, `src/` - frontend application
- `data/db.json` - mock API data used by `/backend`
- `backend/index.js` - minimal backend server scaffold
- `backend/package.json` - backend dev scripts

## Getting started (local development)

Requirements: Node.js 18+ recommended, npm.

1. Install root dependencies

   ```powershell
   npm install
   ```

2. Start the frontend dev server

   ```powershell
   npm run dev
   ```

   The Vite app typically runs at http://localhost:5173

3. (Optional) Start the mock JSON API

   ```powershell
   npm run server
   ```

   This runs `json-server --watch data/db.json` and provides a simple REST API for demo data.

4. (Optional) Start the backend scaffold (if you want the Node server)

   ```powershell
   cd backend; npm install; npm run server
   ```

   The backend uses `nodemon` and will pick up `.env` from the backend folder if present.

## Configuration

- If you use Firebase or other services, add any secrets or env vars in the appropriate `.env` files. The project includes `src/utils/firebaseConfig.js` as a helper — it is not configured by default.

## Development notes

- The root `package.json` includes the following helpful scripts:

  - `npm run dev` — start Vite dev server
  - `npm run server` — start `json-server` watching `data/db.json`
  - `npm run build` — build production assets with Vite

- The backend folder has its own `package.json` with a `server` script that runs `nodemon --env-file=.env index.js`.

## Design / Template

This project uses a visual design template from Template Jungle. Design and UI assets were adapted from their template. Please see Template Jungle for licensing and templates: https://templatesjungle.com/

Design credit: Template Jungle — https://templatesjungle.com/

## Contributing

Contributions are welcome. For small fixes, open a PR. For larger features, please open an issue first so we can coordinate.

## License

MIT License

---

If you'd like, I can also:

- add a short `README` section showing example API endpoints from `data/db.json`
- add a `scripts` convenience entry to concurrently run frontend + json-server

Tell me if you want either of those added and I will update the repo.
