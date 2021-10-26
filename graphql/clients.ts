import { ApolloClient, InMemoryCache } from "@apollo/client";

const ArgonClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_ARGON_URL,
  cache: new InMemoryCache(),
  credentials: "allowed",
});

export const CareerClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_ARGON_URL,
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    email: "vgoyal20@iitk.ac.in",
  },
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
