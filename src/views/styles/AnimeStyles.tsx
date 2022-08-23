import tw, { css, styled } from 'twin.macro'

export const AnimeContainer = styled.div`${tw`w-full`}`

export const AnimeListItem = styled.div`
  ${tw`
    w-full
    grid
    lg:grid-cols-3
    md:grid-cols-2
    sm:grid-cols-1
    gap-5
    px-1
    md:px-2
  `}

  > * {
    margin: 0;
    width: 100%;
  }
`

export const AnimeCard = styled.div`
  ${tw`
    cursor-pointer
    no-underline
    overflow-hidden
  `}

  > * {
    margin: 0;
    width: 100%;
  }
`

export const AnimeCardContent = styled.div`
  ${tw`
    cursor-pointer
    no-underline
    rounded-lg
    w-full
    grid
    grid-cols-2
    gap-[1px]
    bg-gray-50
    hover:shadow-md 
    overflow-hidden
  `}

  > * {
  margin: 0;
  width: 100%;
  }

`

export const AnimeCardInfo = styled.div`
  ${tw`
    p-2
  `}
`

export const AnimeCover = styled.div`
  ${tw`
    relative
    max-w-full
    pb-[150%]
    bg-gray-400
    overflow-hidden
  `}
  img {
    ${tw`
      absolute
      w-full
      h-full
      object-cover
    `}
    margin: 0 !important;
  }
`

export const animeCardTitle = css`
  ${tw`
    text-gray-600
    transition duration-150 ease-in-out
    hover:text-yellow-900
    overflow-hidden
    font-medium
  `}
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const AnimeCardAction = styled.button`
  ${tw`
    absolute
    bottom-0
    z-10
    m-1
    inline-block 
    rounded-full 
    bg-red-600 
    font-bold
    text-white 
    leading-normal 
    uppercase 
    shadow-md 
    hover:bg-red-700 
    hover:shadow-lg 
    focus:bg-red-700 
    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9
  `}
`

export const AnimeDetailBanner = styled.div`
  ${tw`
    md:h-[400px] h-[200px] w-full bg-white
  `}
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
`

export const AnimeDetiailHeading = styled.div`
  ${tw`
    w-full
    grid
    md:grid-cols-[210px auto]
    sm:grid-cols-1
    gap-5
    px-1
    md:px-2
  `}
  > * {
    margin: 0;
    width: 100%;
  }
`

export const Gradient = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.03267244397759106) 84%, rgba(151,151,151,1) 100%);
`

export const CollectionCardBanner = styled.div`
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
`
