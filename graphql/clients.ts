import { ApolloClient, InMemoryCache } from "@apollo/client";



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

export const ResourceClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_RADON_URL,
  cache: new InMemoryCache(),
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  },
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
      errorPolicy: 'all'
    },
    mutate: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  }
})

const GrapQLClient = {
  Career: CareerClient,
  Resource: ResourceClient
}


export default GrapQLClient;
