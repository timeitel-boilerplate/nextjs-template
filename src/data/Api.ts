import { ApiRequest, ApiRequestConfig } from './types';

export class API {
  public get<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<Response> {
    return fetch(path, requestConfig);
  }

  public post<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<Response> {
    return fetch(path, requestConfig);
  }

  public put<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<Response> {
    return fetch(path, requestConfig);
  }

  public delete<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<Response> {
    return fetch(path, requestConfig);
  }
}

export class ApiHelper {
  _headers: Record<string, string>[];

  constructor() {
    this._headers = [
      {
        key: 'Accept',
        value: 'application/json'
      },
      {
        key: 'Content-Type',
        value: 'application/json'
      }
    ];
  }
}

export default API;
