
export class ApiUtilsService {
  constructor() {}

  public async makeFetchCall(url: string, requestParams: RequestInit): Promise<unknown> {
    try {
      const response: Response = await fetch(url, requestParams);

      if (!response.ok || response.status >= 400) {
        throw new Error(JSON.stringify({
          message: `The Http api call : ${url} give this error status : ${response.status} and this error: ${await response.text()}`,
        }));
      }

      return response.json();
    } catch (error: any) {
      throw new Error();
    }
  }
}
