/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = 'GET' | 'POST' | 'put' | 'DELETE' | 'PATCH';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  paymentRequired = 402,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  status: HttpStatusCode;
  body?: T;
};

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  referer?: string;
  type?: string;
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
