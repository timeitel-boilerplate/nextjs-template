import { ApiRequestConfig, ApiMethod } from './types';

export class API {
  public static async get<T>(path: string): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder());

    return await res.json();
  }

  public static async post<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder(requestConfig));

    return await res.json();
  }

  public static async put<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder(requestConfig));

    return await res.json();
  }

  public static async delete<T>(
    path: string,
    requestConfig: ApiRequestConfig
  ): Promise<T> {
    const res = await fetch(path, ApiRequestConfigBuilder(requestConfig));

    return await res.json();
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

export default API;
