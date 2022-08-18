import React from 'react'
import tw from "twin.macro"

const Home: React.FC = () => {
  const PrimaryButton = tw.button`bg-blue-800 text-white px-6 py-2 m-6 rounded-md hover:bg-blue-600`
  return (
    <div>
      <PrimaryButton> home button</PrimaryButton>
    </div>
  )
}

export default Home
