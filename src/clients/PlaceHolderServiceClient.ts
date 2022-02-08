// example.ts
import { HttpClient } from '../../libs/httpClient/httpClient';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type PlaceHolderServiceClient = Readonly<{
  getPosts: () => Promise<ReadonlyArray<Todo>>;
}>;

export function createPlaceHolderServiceClient(
  serverUrl: string,
  httpClient: HttpClient,
): PlaceHolderServiceClient {
  const getPosts = async (): Promise<ReadonlyArray<Todo>> => {
    const url = `${serverUrl}/todos`;
    const { parsedBody } = await httpClient.get<ReadonlyArray<Todo>>(url);
    return parsedBody ?? [];
  };
  return {
    getPosts,
  };
}
