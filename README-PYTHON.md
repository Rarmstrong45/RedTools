# React + Python FastAPI Setup

This project now uses a Python FastAPI backend with a React TypeScript frontend.

## Prerequisites

- Node.js (for the React frontend)
- Python 3.8+ (for the FastAPI backend)

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Install Node.js Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment example file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration values.

### 4. Running the Application

#### Option A: Run Both Frontend and Backend Together
```bash
npm run dev:full
```

#### Option B: Run Separately

**Backend (Python FastAPI):**
```bash
npm run dev:backend
# or directly:
python main.py
```

**Frontend (React + Vite):**
```bash
npm run dev
```

## API Endpoints

- `GET /api/ping` - Ping endpoint
- `GET /api/demo` - Demo endpoint
- `GET /` - Health check

## Development

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs (FastAPI auto-generated)

## Project Structure

```
├── client/                 # React frontend
├── shared/                 # Shared TypeScript types
├── main.py                # Python FastAPI backend
├── requirements.txt       # Python dependencies
└── package.json          # Node.js dependencies and scripts
```
