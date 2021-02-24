import { Api } from './Api';

class ApiPlumbing extends Api {
  constructor(basePath: string) {
    super((basePath = basePath));
  }

  post(url: string) {}

  get(url: string) {}
}

export const ApiService = new ApiPlumbing('items');
