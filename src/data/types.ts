export type ApiMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type ApiRequestConfig = {
  method: ApiMethod;
  headers: Record<string, string>;
  body: string;
};

export type ApiResult = 'success' | 'failure';

export type ApiError = {
  ErrorCode: string;
  Description: string;
};

export type ApiResponse<T> = {
  Result: ApiResult;
  Response: T | ApiError;
};
