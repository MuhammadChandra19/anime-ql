import { css } from '@emotion/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalStyles } from 'twin.macro'
import { Container, Layout } from '../styles/LayoutStyles'
const MainLayout: React.FC = () => {
  return (
    <>
      <GlobalStyles 
        css={css`
          body {
            margin: 0;
          }`}
      />
      <Layout>
        <Container>
          <Outlet />
        </Container>
      </Layout>
    </>
  )
}

export default MainLayout