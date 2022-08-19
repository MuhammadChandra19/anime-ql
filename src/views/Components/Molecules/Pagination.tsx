import React from 'react'
import tw, { css } from 'twin.macro'

type PaginationProps = {
  action: (page: number) => void
  hasNextPage: boolean
  currentPage: number
}

const activeStyle = css`${
  tw`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`
}`

const disabledStyle = css`${
  tw`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60`
}`

const Pagination: React.FC<PaginationProps> = ({ action, currentPage, hasNextPage}) => {
  return (
    <div css={css`${tw`flex justify-between mx-auto max-w-xs py-5`}`}>
      <button 
        css={ currentPage === 1 ? disabledStyle : activeStyle} 
        disabled={currentPage === 1} 
        onClick={() => action(currentPage - 1)}
      >
        Prev Page
      </button>
      <button 
        css={hasNextPage ? activeStyle : disabledStyle } 
        disabled={!hasNextPage} 
        onClick={() => action(currentPage + 1)}
      >
        Next Page
      </button>
    </div>
  )
}

export default Pagination
