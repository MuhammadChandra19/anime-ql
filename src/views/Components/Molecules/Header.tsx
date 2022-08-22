import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/LayoutStyles'
const Header: React.FC = () => {
  return (
    <div tw="w-full bg-blue-500">
      <Container>
        <div tw='flex'>
          <Link to={"/"}>
            <div tw='font-medium mr-8 text-gray-200 text-base'>Home</div>
          </Link>
          <Link to={"/collection"}>
            <div tw='font-medium mr-2 text-gray-200 text-base'>Collection</div>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Header
