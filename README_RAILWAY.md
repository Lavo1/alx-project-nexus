# Deploying the backend to Railway

This repo includes a helper workflow that builds a Docker image for the Django backend and pushes it to GitHub Container Registry (GHCR). Use Railway to create a service that deploys that image, or connect Railway directly to the GitHub repo.

Two deployment options:

Option A — Connect GitHub repo to Railway (recommended, simplest)
1. Sign in to https://railway.app using GitHub.
2. Create a new project → "Deploy from GitHub repo" and choose this repository.
3. If Railway doesn't detect the backend automatically, set the root directory to `jobplacement-backend` and use the following commands:
   - Build Command: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
   - Start Command: `gunicorn backend.wsgi --bind 0.0.0.0:$PORT`
4. Add environment variables in Railway (Project or Service settings):
   - `DJANGO_SECRET_KEY` = (generate a secure secret)
   - `DEBUG` = `False`
   - `CORS_ALLOW_ALL_ORIGINS` = `False`
   - `CORS_ALLOWED_ORIGINS` = `https://<your-frontend-domain>`
5. In Railway UI, add the Postgres plugin (Plugins → Add Plugin → Postgres). Copy the `DATABASE_URL` it provides and add it to the service env vars.
6. Deploy and then run migrations (Railway has a Web Console → Run Command):
   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

Option B — Use the prebuilt Docker image from GHCR
1. Run the GitHub Action `Build and push backend image` (Actions → Build and push backend image → Run workflow). It pushes the image to `ghcr.io/<your-username>/jobplacement-backend:latest`.
2. In Railway, create a new service and choose "Deploy from Container Registry" (or create a service and set it to use the image URL).
3. Set environment variables as in Option A and add Postgres plugin.

Notes & secrets
- The GH Action uses the repository `GITHUB_TOKEN` to push to GHCR. If you prefer, create a `PAT` with `write:packages` and add it as `GHCR_PAT` secret, then update the workflow to use that secret.
- Add the following env vars to Railway service:
  - `DJANGO_SECRET_KEY`
  - `DEBUG=false`
  - `DATABASE_URL` (from Railway Postgres plugin)
  - `ALLOWED_HOSTS` (Railway will provide the hostname, add it here)
  - `CORS_ALLOW_ALL_ORIGINS=false`
  - `CORS_ALLOWED_ORIGINS` (your frontend URL)

Troubleshooting
- If Railway doesn't detect the app, use the explicit root directory and the build/start commands above.
- If you prefer automated deployments from GitHub pushes, enable Railway's GitHub integration in the service settings (no extra workflow needed).
- If you want me to add a workflow that triggers Railway via API/CLI, say so and I will add it (I will need a Railway API token stored as `RAILWAY_API_KEY` in GitHub Secrets). For security, do not paste tokens in chat.

If you want, I can now:
- A) Add the GHCR/Pushed image workflow (already added) and create a short script to help you run migrations from Actions.
- B) Add a Railway-specific workflow that uses the Railway CLI to trigger a deploy (requires `RAILWAY_API_KEY` secret).

Which do you prefer?