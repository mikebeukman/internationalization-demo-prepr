// ./services/apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { headers } from "next/headers";
import { mapLocale } from "@/src/utils/mapLocales";

export const client = new ApolloClient({
  uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
  cache: new InMemoryCache(),
});

export const { getClient } = registerApolloClient(() => {
  let locale = headers().get("x-next-intl-locale");

  let headerClient = new ApolloClient({
    uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
    cache: new InMemoryCache(),
    headers: { "Prepr-Locale": mapLocale(locale) },
  });

  return headerClient;
});
