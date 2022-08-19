import tw, { styled } from 'twin.macro'

export const AnimeContainer = styled.div`${tw`w-full`}`

export const AnimeListItem = styled.div`
  ${tw`
    w-full
    grid
    grid-cols-5
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
  `}
`

export const AnimeCover = styled.div`
  ${tw`
    relative
    max-w-full
    pb-[140%]
    rounded-lg
    bg-gray-400
    overflow-hidden
    mb-3
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
