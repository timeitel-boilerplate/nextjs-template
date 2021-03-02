import { Api, ApiService } from './Api';
import { ApiRequestConfig } from './types';

type TestType = {
  active: boolean;
};

export class DomainService {
  public static getCategories = async (): Promise<TestType> =>
    await ApiService.get('items');

  public static getQuestions = async (
    url: string,
    requestConfig: ApiRequestConfig
  ): Promise<Api> => {
    return await ApiService.post(url, requestConfig);
  };
}
