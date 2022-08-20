import React from 'react'
import tw, { css } from 'twin.macro'
const Header: React.FC = () => {
  return (
    <div css={css`${tw`h-14 w-full bg-blue-500`}`}></div>
  )
}

export default Header