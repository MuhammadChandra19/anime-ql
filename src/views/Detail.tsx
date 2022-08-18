import React from 'react'
import tw from "twin.macro"

const Detail: React.FC = () => {
  const SecondaryButton = tw.button`bg-blue-800 text-white px-6 py-2 m-6 rounded-md hover:bg-gray-600`
  return (
    <div>
      <SecondaryButton> home button</SecondaryButton>
    </div>
  )
}

export default Detail