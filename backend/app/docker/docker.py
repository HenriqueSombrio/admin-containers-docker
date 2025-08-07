import docker

client = docker.from_env()

def listar_containers():
    containers = client.containers.list(all=True)
    return [{
        "id": c.short_id,
        "name": c.name,
        "status": c.status,
        "image": c.image.tags[0] if c.image.tags else "<none>"
    } for c in containers]

def startar_container(container_id):
    container = client.containers.get(container_id)
    container.start()
    return container.name

def parar_container(container_id):
    container = client.containers.get(container_id)
    container.stop()
    return container.name

def remover_container(container_id):
    container = client.containers.get(container_id)
    container.remove(force=True)
    return container.name
