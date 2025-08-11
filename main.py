import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from pydantic import BaseModel

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure as needed for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Response models (matching the TypeScript interfaces)
class DemoResponse(BaseModel):
    message: str

class PingResponse(BaseModel):
    message: str

@app.get("/api/ping", response_model=PingResponse)
async def ping():
    """Ping endpoint equivalent to Express version"""
    ping_message = os.getenv("PING_MESSAGE", "ping")
    return PingResponse(message=ping_message)

@app.get("/api/demo", response_model=DemoResponse)
async def demo():
    """Demo endpoint equivalent to Express version"""
    return DemoResponse(message="Hello from Python FastAPI server")

@app.get("/")
async def root():
    """Root endpoint for health check"""
    return {"message": "Python FastAPI backend is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
