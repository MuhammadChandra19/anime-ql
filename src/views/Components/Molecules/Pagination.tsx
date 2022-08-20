import React from 'react'
import tw, { css } from 'twin.macro'
import { disabledPrimaryButton, primaryButton } from '../../styles/components/Button'

type PaginationProps = {
  action: (page: number) => void
  hasNextPage: boolean
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ action, currentPage, hasNextPage}) => {
  return (
    <div css={css`${tw`flex justify-between mx-auto max-w-xs py-5`}`}>
      <button 
        css={ currentPage === 1 ? disabledPrimaryButton : primaryButton} 
        disabled={currentPage === 1} 
        onClick={() => action(currentPage - 1)}
      >
        Prev Page
      </button>
      <button 
        css={hasNextPage ? primaryButton : disabledPrimaryButton } 
        disabled={!hasNextPage} 
        onClick={() => action(currentPage + 1)}
      >
        Next Page
      </button>
    </div>
  )
}

export default Pagination
