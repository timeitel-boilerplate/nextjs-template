import Api from './Api';
import { ApiService } from './ApiService';
import { ApiRequestConfig } from './types';

export class DomainService {
  public static getCategories = async (): Promise<Api> =>
    await ApiService.get('items');

  public static getQuestions = async (
    url: string,
    requestConfig: ApiRequestConfig
  ): Promise<Api> => {
    return await ApiService.post(url, requestConfig);
  };
}
