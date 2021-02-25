import Api from './Api';
import { ApiResponse } from './types';

export const ApiService = new Api('').setHeaders([
  {
    key: 'Accept',
    value: 'application/json'
  },
  {
    key: 'Content-Type',
    value: 'application/json'
  }
]);

fetch('/users', api.request(body))
  .then((res) => res.json())
  .then((data) => {
    const response: ApiResponse<T> = data;

    if (response.Result === APIResult.FAILURE) {
      // handle failed call here
    } else if (response.Result === APIResult.SUCCESS) {
      // do stuff with response
    }
  })
  .catch(() => {
    console.log('Fetch request error');
    // reset state, make button clickable again, etc
  });
