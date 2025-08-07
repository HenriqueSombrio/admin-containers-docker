from fastapi import APIRouter, HTTPException
from app.docker import docker

router = APIRouter()

@router.get("/")
def inicio():
  return 'teste'

@router.get("/containers")
def listar():
    return docker.listar_containers()

@router.post("/containers/{container_id}/start")
def startar(container_id: str):
    try:
        nome = docker.startar_container(container_id)
        return {"message": f"Container {nome} iniciado."}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/containers/{container_id}/stop")
def parar(container_id: str):
    try:
        nome = docker.parar_container(container_id)
        return {"message": f"Container {nome} parado."}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.delete("/containers/{container_id}")
def remover(container_id: str):
    try:
        nome = docker.remover_container(container_id)
        return {"message": f"Container {nome} removido."}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
