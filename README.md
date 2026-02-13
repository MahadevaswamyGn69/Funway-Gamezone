# FunWay Game Zone

FunWay Game Zone is a responsive gaming website built using HTML, CSS, and JavaScript. It showcases various fun activities like Go Karting, Bull Ride, Bowling, Laser Tag, VR Games, Snooker, Paintball, and Archery. The project demonstrates clean UI design, smooth navigation, and interactive frontend development skills.

This repository contains:

- `frontend/` – static HTML/CSS/JS pages for the site (home, games, booking, contact, admin, etc.).
- `backend/` – a simple Node.js/Express server (`server.js`) used to serve data/API for the site.

## Local Development

1. Install [Node.js](https://nodejs.org/) (LTS version).
2. In the project root:

   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Open the `frontend/home.html` file in your browser (or serve `frontend/` using a simple static server / VS Code Live Server).

## Deploying to Render

You can deploy this project on [Render](https://render.com) in two parts:

- **Backend** as a Render Web Service (Node.js).
- **Frontend** as a Render Static Site, or served directly by the backend if you prefer.

### 1. Backend – Render Web Service

1. Push this repository to GitHub (see instructions below).
2. On Render, click **New → Web Service**.
3. Choose **Build from a Git repository** and select this repo.
4. In the service settings, set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Create the service and wait for the deployment to finish.

Make a note of the backend URL that Render gives you (for example, `https://funway-backend.onrender.com`). You can later plug this into your frontend JavaScript if you call any APIs.

### 2. Frontend – Render Static Site (recommended)

If your frontend is purely static (HTML/CSS/JS):

1. On Render, click **New → Static Site**.
2. Choose the same GitHub repo.
3. Set:
   - **Root Directory**: `frontend`
   - **Build Command**: `none` (leave empty) – files are already static.
   - **Publish Directory**: `.`
4. Create the static site and wait for deployment.

Render will give you a public URL like `https://funway-gamezone.onrender.com` that you can share.

## Pushing to GitHub

After installing Git, from the project root (`C:\web AAT`):

```bash
git init
git add .
git commit -m "Initial commit: FunWay Game Zone"
git branch -M main
git remote add origin https://github.com/MahadevaswamyGn69/Funway-Gamezone.git
git push -u origin main --force
```

> **Note:** `--force` is used to replace the initial empty README-only commit on GitHub with this full project history.

