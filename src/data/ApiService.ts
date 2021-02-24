import { Api } from './Api';

class ApiPlumbing extends Api {
  constructor(bp: string) {
    super((basePath = bp));
  }

  post(url: string) {}

  get(url: string) {}
}

export const ApiService = new ApiPlumbing('items');
