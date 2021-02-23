import { Api } from "./Api";

class ApiPlumbing extends Api {
  constructor(basePath: string) {
    super((basePath = basePath));
  }

  post(url: string) {
    return;
  }

  get(url: string) {
    return;
  }
}

export const ApiService = new ApiPlumbing("items");
