import { API_URL } from '../constants/constants';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TRequestFetch = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: HeadersInit;
  params?: Record<string, string>;
  signal?: AbortSignal;
  timeout?: number;
};

export class Requests {
  private hostname: string;
  constructor() {
    this.hostname = API_URL;
  }

  async request({ url, method, body }: TRequestFetch) {
    let response;

    try {
      response = await fetch(`${this.hostname}${url}`, {
        method,
        body: JSON.stringify(body),
      });
    } catch (error: any) {
      response = error.response;
    }
    const resposta = await response.json();
    return {
      status: response.status,
      body: resposta,
    };
  }
}
