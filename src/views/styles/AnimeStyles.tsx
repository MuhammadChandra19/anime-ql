import tw, { styled } from 'twin.macro'

export const AnimeContainer = styled.div`${tw`w-full`}`

export const AnimeListItem = styled.div`
  ${tw`
    w-full
    grid
    grid-cols-3
    gap-5
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
    rounded-lg
    w-full
    grid
    grid-cols-2
    gap-1
    bg-gray-50
    hover:shadow-xl 
    overflow-hidden
  `}

  > * {
    margin: 0;
    width: 100%;
  }
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
