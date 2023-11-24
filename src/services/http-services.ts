import apiClient from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(params: any) {
    const controller = new AbortController();
    const resultPromise = apiClient(params).get<T>(this.endpoint, {
      signal: controller.signal,
    });
    return { controller, resultPromise };
  }

  getOne<T>(id: number, params: any) {
    const controller = new AbortController();
    const resultPromise = apiClient(params).get<T>(this.endpoint + "/" + id, {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  }
}

const httpService = (endpoint: string) => new HttpService(endpoint);

export default httpService;
