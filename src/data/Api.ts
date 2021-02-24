export abstract class Api {
  path: string;
  headers: {};

  constructor(path: string) {
    this.path = path;
    this.headers = {
      Accept: 'application/json'
    };
  }

  post(url: string) {
    fetch(url);
  }

  get(url: string) {
    fetch(url);
  }

  // if (this.api_token) {
  //   headers.Authorization = `Bearer ${this.api_token}`;
  // }
}
