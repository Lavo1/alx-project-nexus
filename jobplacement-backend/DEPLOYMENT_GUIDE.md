# Deployment Guide - Job Placement Application

## Overview
This document outlines all the steps taken to deploy both the frontend and backend services for the Job Placement application locally using development servers.

---

## Project Structure

```
alx-project-nexus/
├── jobplacement-backend/       # Django REST API
│   ├── backend/                # Django settings
│   ├── accounts/               # User authentication app
│   ├── applications/           # Job applications app
│   ├── jobs/                   # Job listings app
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── jobplacement-frontend/      # Next.js frontend
│   ├── app/                    # Pages and routes
│   ├── components/             # React components
│   ├── lib/                    # Utilities and API functions
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml          # Docker orchestration
└── README.md
```

---

## Deployment Steps

### Step 1: Backend Setup

#### 1.1 Create Virtual Environment
```bash
cd jobplacement-backend
python -m venv venv
```

#### 1.2 Activate Virtual Environment
**On Windows:**
```bash
.\venv\Scripts\activate
```

**On macOS/Linux:**
```bash
source venv/bin/activate
```

#### 1.3 Install Dependencies
```bash
pip install -r requirements.txt
```

**Installed Packages:**
- Django >= 5.2
- djangorestframework
- djangorestframework-simplejwt
- gunicorn
- psycopg2-binary
- django-cors-headers
- whitenoise
- dj-database-url
- python-dotenv

#### 1.4 Run Database Migrations
```bash
python manage.py migrate
```

This applies all migrations for:
- accounts
- admin
- applications
- auth
- contenttypes
- jobs
- sessions

---

### Step 2: Frontend Setup

#### 2.1 Navigate to Frontend Directory
```bash
cd jobplacement-frontend
```

#### 2.2 Install Dependencies
```bash
npm install
```

This installs all required Node.js packages (357 packages total).

---

### Step 3: Running Both Services

#### 3.1 Start Backend Server

**From jobplacement-backend directory (with venv activated):**
```bash
python manage.py runserver
```

**Backend Server Details:**
- URL: http://localhost:8000
- Purpose: Django REST API
- Features: Hot reload enabled

#### 3.2 Start Frontend Server

**From jobplacement-frontend directory (in a new terminal):**
```bash
npm run dev
```

**Frontend Server Details:**
- URL: http://localhost:3000
- Purpose: Next.js web interface
- Features: Hot reload enabled

---

## Deployment Status ✅

- ✅ Backend virtual environment created
- ✅ Backend dependencies installed
- ✅ Database migrations applied
- ✅ Frontend dependencies installed
- ✅ Both servers running and accessible

---

## Available Application Screens

Navigate to the following URLs to access different screens of the application:

### 1. **Home Page**
- **URL:** http://localhost:3000/
- **Description:** Main landing page of the application
- **Purpose:** Dashboard or entry point for the application

### 2. **Jobs Listing**
- **URL:** http://localhost:3000/jobs
- **Description:** Browse all available job positions
- **Purpose:** View all job postings from the database
- **Features:** Job list with details

### 3. **Job Details**
- **URL:** http://localhost:3000/jobs/[id]
- **Description:** Detailed view of a specific job
- **Purpose:** Display full job information including description, requirements, and salary
- **Note:** Replace `[id]` with an actual job ID (e.g., `/jobs/1`)

### 4. **Apply for Job**
- **URL:** http://localhost:3000/apply
- **Description:** Job application form
- **Purpose:** Submit a job application
- **Features:** Form submission to backend API

### 5. **Login Page**
- **URL:** http://localhost:3000/login
- **Description:** User authentication
- **Purpose:** Login with credentials to access protected features
- **Features:** JWT token authentication

### 6. **Success Page**
- **URL:** http://localhost:3000/success
- **Description:** Success confirmation page
- **Purpose:** Confirmation message after successful actions (e.g., application submission)

### 7. **Test Page**
- **URL:** http://localhost:3000/test
- **Description:** Test/Demo page
- **Purpose:** Testing functionality and API connections

---

## API Endpoints

The backend provides the following REST API endpoints:

### Authentication Endpoints
- POST `/api/token/` - Obtain JWT token
- POST `/api/token/refresh/` - Refresh JWT token

### Jobs Endpoints
- GET `/api/jobs/` - List all jobs
- GET `/api/jobs/{id}/` - Get job details
- POST `/api/jobs/` - Create job (admin only)

### Applications Endpoints
- GET `/api/applications/` - List applications
- POST `/api/applications/` - Submit application
- GET `/api/applications/{id}/` - Get application details

### Accounts Endpoints
- POST `/api/accounts/register/` - Register new user
- GET `/api/accounts/profile/` - Get user profile
- PUT `/api/accounts/profile/` - Update user profile

---

## Environment Configuration

### Backend Environment Variables (for production)
```
DEBUG=False
DJANGO_SECRET_KEY=your-secret-key-here
DATABASE_URL=postgres://user:password@db:5432/jobplacement
CORS_ALLOW_ALL_ORIGINS=False
CORS_ALLOWED_ORIGINS=https://your-frontend-domain
ALLOWED_HOSTS=localhost,127.0.0.1,your-domain.com
```

### Frontend Environment Variables
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Stopping Services

To stop the running services:

1. **Backend:** Press `Ctrl+C` in the backend terminal
2. **Frontend:** Press `Ctrl+C` in the frontend terminal

---

## Troubleshooting

### Backend Issues

**Issue:** `ModuleNotFoundError: No module named 'django'`
- **Solution:** Make sure virtual environment is activated and dependencies are installed
```bash
.\venv\Scripts\activate
pip install -r requirements.txt
```

**Issue:** Database migration errors
- **Solution:** Delete `db.sqlite3` and run migrations again
```bash
python manage.py migrate
```

### Frontend Issues

**Issue:** `npm: command not found`
- **Solution:** Install Node.js from https://nodejs.org/

**Issue:** Port 3000 already in use
- **Solution:** Run on a different port
```bash
npm run dev -- -p 3001
```

**Issue:** Cannot connect to backend API
- **Solution:** Check if backend is running at http://localhost:8000

---

## Docker Deployment (Alternative)

If you have Docker installed, you can use Docker Compose to run everything:

```bash
docker compose up --build
```

This will start:
- PostgreSQL database (port 5432)
- Django backend (port 8000)
- Next.js frontend (port 3001)

**Note:** Docker must be installed on your system. If not installed, follow Step 1-3 above for local development.

---

## Production Deployment

For deploying to production, see `README_RAILWAY.md` for Railway deployment instructions.

Key steps:
1. Push code to GitHub
2. Connect GitHub repo to Railway
3. Set environment variables
4. Add PostgreSQL plugin
5. Deploy and run migrations

---

## Tech Stack

### Backend
- **Framework:** Django 6.0
- **API:** Django REST Framework
- **Authentication:** JWT (djangorestframework-simplejwt)
- **Database:** PostgreSQL (development uses SQLite)
- **CORS:** django-cors-headers
- **Server:** Gunicorn

### Frontend
- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **HTTP Client:** Fetch API / Axios
- **Build Tool:** Webpack (via Next.js)

---

## Development Workflow

1. **Start Backend:** `python manage.py runserver`
2. **Start Frontend:** `npm run dev`
3. **Visit App:** http://localhost:3000
4. **Make Changes:** Files auto-reload on save
5. **Test API:** Use Postman or browser dev tools
6. **Commit Changes:** `git add . && git commit -m "message"`

---

## Next Steps

1. Add test data to the database
2. Implement user authentication flow
3. Test all application screens
4. Configure CORS for frontend-backend communication
5. Deploy to production using Railway or Docker

---

## Support & Documentation

- Django Docs: https://docs.djangoproject.com/
- Django REST Framework: https://www.django-rest-framework.org/
- Next.js Docs: https://nextjs.org/docs
- Railway Docs: https://docs.railway.app/

---

**Last Updated:** December 3, 2025
**Deployment Status:** ✅ Ready for Development
