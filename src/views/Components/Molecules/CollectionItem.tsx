import React, { useState } from 'react'
import { primaryButton, warningButton } from '../../styles/components/Button'

type CollectionItemProps = {
  value: string
  editable?: boolean
}
const CollectionItem: React.FC<CollectionItemProps> = ({ value }) => {
  const [internalValue, setInternalValue] = useState(value)
  return (
    <div tw="flex justify-between mb-2">
      {/* <input 
        tw="
          flex-1 block w-full
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          px-1
          mr-1
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
      />
      <button css={primaryButton} tw="mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z" />
          <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z" />
        </svg>
      </button>
      <button css={warningButton} tw="mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
        </svg>
      </button> */}
    </div>
  )
}

export default CollectionItem
