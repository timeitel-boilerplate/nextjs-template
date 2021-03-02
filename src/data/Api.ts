import { ApiRequestConfig, ApiMethod } from './types';

export class Api {
  public static async get<T>(path: string): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder());

    if (!res.ok) throw new Error(res.statusText);

    return (await res.json()) as Promise<T>;
  }

  public static async post<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder(requestConfig));

    if (!res.ok) throw new Error(res.statusText);
    if (res.body !== null) throw new Error('Error in post');

    return (await res.json()) as Promise<T>;
  }

  public static async put<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder(requestConfig));

    if (!res.ok) throw new Error(res.statusText);
    if (res.body !== null) throw new Error('Error in post');

    return (await res.json()) as Promise<T>;
  }

  public static async delete<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder(requestConfig));

    if (!res.ok) throw new Error(res.statusText);
    if (res.body !== null) throw new Error('Error in post');

    return (await res.json()) as Promise<T>;
  }
}

const ApiRequestConfigBuilder = (
  config?: ApiRequestConfig
): ApiRequestConfig => {
  const apiRequest: ApiRequestConfig = {
    body: config?.body || '',
    headers: ApiHeadersBuilder,
    method: ApiMethod.Get
  };

  return apiRequest;
};

const ApiHeadersBuilder = {
  'content-type': 'application/json;charset=UTF-8'
};

export const ApiService = Api;
