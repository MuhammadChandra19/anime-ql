import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { css } from '@emotion/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalStyles } from 'twin.macro'
import Header from '../Components/Molecules/Header'
import { Layout } from '../styles/LayoutStyles'
const MainLayout: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <GlobalStyles 
        css={css`
          body {
            margin: 0;
          }`}
      />
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </ApolloProvider>
  )
}

export default MainLayout