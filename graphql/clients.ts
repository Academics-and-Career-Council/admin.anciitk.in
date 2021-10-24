
import { ApolloClient, InMemoryCache } from "@apollo/client";

const ArgonClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_ARGON_URL,
    cache: new InMemoryCache(),
    credentials: 'allowed'
});

const CareerClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_CAREER_URL,
    cache: new InMemoryCache(),
    credentials: 'allowed'
})

const GrapQLClient = {
    Argon: ArgonClient,
    Career: CareerClient
}

export default GrapQLClient;