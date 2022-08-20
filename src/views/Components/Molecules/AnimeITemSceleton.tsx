import React from 'react'
import tw, { css } from 'twin.macro'
import { AnimeCard, AnimeCardAction, AnimeCardContent, AnimeCover } from '../../styles/AnimeStyles'
const AnimeItemSkeleton: React.FC<{ id: number }> = ({ id }) => (
  <React.Fragment key={`anime-card-${id}`}>
    <AnimeCard css={css`${tw`animate-pulse`}`}>
      <AnimeCardContent>
        <AnimeCover>
          <AnimeCardAction css={css`${tw`bg-gray-700`}`} />
        </AnimeCover>
        <div css={css`${tw`p-1 relative`}`}>
          <div css={css`${tw`flex justify-between mb-8`}`}>
            <div css={css`${tw`h-10 w-full bg-gray-400 m-1 rounded`}`} ></div>
            <div css={css`${tw`h-10 w-full bg-gray-400 m-1 rounded`}`} ></div>
          </div>
          <div css={css`${tw`rounded w-full bg-gray-400 h-10`}`} ></div>
          <div css={css`${tw`absolute bottom-0 w-[80%] m-1`}`}>
            <div css={css`${tw`rounded w-full bg-gray-400 h-10 mb-1`}`}></div>
             <div css={css`${tw`rounded w-full bg-gray-400 h-10`}`}></div>
          </div>
        </div>
      </AnimeCardContent>
    </AnimeCard>
    <div css={css`${tw`rounded bg-gray-400 h-10 w-full`}`} ></div>
  </React.Fragment >
)

export default AnimeItemSkeleton