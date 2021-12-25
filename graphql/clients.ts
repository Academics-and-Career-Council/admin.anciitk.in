import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const ArgonClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_ARGON_URL,
  cache: new InMemoryCache(),
  credentials: "allowed",
});

export const CareerClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_ARGON_URL,
  cache: new InMemoryCache(),
  credentials: 'include',
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    },
    mutate: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  },
});

const GrapQLClient = {
  Argon: ArgonClient,
  Career: CareerClient,
};

export default GrapQLClient;
