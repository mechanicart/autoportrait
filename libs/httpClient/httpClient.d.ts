interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
export declare type HttpClient = Readonly<{
  get: <T>(url: string, args?: RequestInit) => Promise<HttpResponse<T>>;
  post: <T>(
    url: string,
    body: any,
    args?: RequestInit,
  ) => Promise<HttpResponse<T>>;
  put: <T>(
    url: string,
    body: any,
    args?: RequestInit,
  ) => Promise<HttpResponse<T>>;
}>;
export declare function createHttpClient(params?: {
  requestInit?: RequestInit;
}): HttpClient;
export {};
