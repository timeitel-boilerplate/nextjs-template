/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiService } from './ApiService';

interface Result {
  total: number;
}

export class DomainService {
  public static getCategories = async (): Promise<> =>
    await ApiService.get('items');

  public static getQuestions = async (
    text: string,
    take: number,
    skip: number
  ): Promise<T> => {
    return await ApiService.post('items');
  };
}
