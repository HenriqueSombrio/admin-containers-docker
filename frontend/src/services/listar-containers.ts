import { Requests } from '../core/Requests';

const containers = new Requests();

export async function listar_containers() {
  return await containers.request({
    method: 'GET',
    url: 'containers',
  });
}
