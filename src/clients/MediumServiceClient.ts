import { HttpClient } from '../../libs/httpClient/httpClient';

export type MediumFeed = {
  url: string;
  title: string;
  link: string;
  author: string;
  image: string;
};

export type MediumItems = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Record<string, string>;
  categories: ReadonlyArray<string>;
};

export type MediumResponse = {
  status: string;
  feed: MediumFeed;
  items: ReadonlyArray<MediumItems>;
};

export type MediumServiceClient = Readonly<{
  getMediumPosts: () => Promise<MediumResponse>;
}>;

export function createMediumServiceClient(
  serverUrl: string,
  httpClient: HttpClient,
): MediumServiceClient {
  const getMediumPosts = async (): Promise<MediumResponse> => {
    const searchParams = new URLSearchParams({
      rss_url: 'https://medium.com/feed/@aitikhomirov',
    });

    const url = `${serverUrl}?${searchParams}`;
    const { parsedBody } = await httpClient.get<MediumResponse>(url);
    return parsedBody;
  };
  return {
    getMediumPosts,
  };
}
