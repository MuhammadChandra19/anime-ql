import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AnimeList from './Components/Organisims/AnimeList';

const Home: React.FC = () => {

  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <AnimeList />
    </ApolloProvider>
  )
}

export default Home
