import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../styles/LayoutStyles'
const MainLayout: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default MainLayout