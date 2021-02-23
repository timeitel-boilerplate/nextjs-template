import { ApiService } from "./ApiService";

interface Result {
  total: number;
}

export class _Domain_Service {
  public static getCategories = async (): Promise<any> =>
    await ApiService.get("items");

  public static getQuestions = async (
    text: string,
    take: number,
    skip: number
  ) => {
    return await ApiService.post("items");
  };
}
