import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import tw from "twin.macro"
import MediaList from './Components/Molecules/MediaList';

const Home: React.FC = () => {

  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
  })

  const PrimaryButton = tw.button`bg-blue-800 text-white px-6 py-2 m-6 rounded-md hover:bg-blue-600`
  return (
    <ApolloProvider client={client}>
      <MediaList />
    </ApolloProvider>
  )
}

export default Home
