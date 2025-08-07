import { Requests } from '../core/Requests';

const container = new Requests();

export async function inciar_container(id_container: string) {
  return await container.request({
    method: 'POST',
    url: `containers/${id_container}/start`,
  });
}
