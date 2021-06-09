import {
  ContentfulClientApi,
  CreateClientParams,
  createClient,
} from 'contentful';

export interface UseContentfulType {
  client: ContentfulClientApi;
}

export default function useContentful(
  env: Record<string, any>
): UseContentfulType {
  const config: CreateClientParams = {
    space: env.CTF_SPACE_ID || '',
    accessToken: env.CTF_CDA_ACCESS_TOKEN || '',
  };
  const client = createClient(config);
  return {
    client,
  };
}
