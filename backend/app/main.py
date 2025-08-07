from fastapi import FastAPI
from app.api.routes import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir frontend acessar a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, defina a origem do seu frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
