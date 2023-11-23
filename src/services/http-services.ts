import apiClient from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const resultPromise = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
    });
    return { controller, resultPromise };
  }

  getOne<T>(id: number) {
    const controller = new AbortController();
    const resultPromise = apiClient.get<T>(this.endpoint + "/" + id, {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  }
}

const httpService = (endpoint: string) => new HttpService(endpoint);

export default httpService;
