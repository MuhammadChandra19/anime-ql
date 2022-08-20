import React from 'react'
import tw, { css } from 'twin.macro'
import { AnimeList_Page_media as Media } from '../../../graphql/animeList/__generated__/AnimeList'
import { AnimeCard, AnimeCardContent, animeCardTitle, AnimeCover, AnimeCardAction } from '../../styles/AnimeStyles'

const AnimeItem: React.FC<{anime: Media, onClick: (anime: Media) => void }> = ({ anime, onClick }) => {
  const studioName = anime.studios?.edges?.filter(studio => studio?.isMain)[0]?.node?.name
  return (
    <>
      <AnimeCard key={`anime-card-${anime.id}`}>
        <AnimeCardContent>
          <AnimeCover>
            <img alt={anime.title?.english!} src={anime.coverImage?.extraLarge!} />
            <AnimeCardAction data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => onClick(anime)}>+</AnimeCardAction>
          </AnimeCover>
          <div css={css`${tw`p-1 relative`}`}>
            <div css={css`${tw`flex justify-between text-sm mb-8`}`}>
              <div css={css`${tw`text-sm text-gray-500 font-medium py-1.5`}`}>{anime.season} {anime.seasonYear}</div>
              <div css={css`${tw`text-xl text-yellow-400 font-bold`}`}>{anime.meanScore}</div>
            </div>
            <div css={css`${tw`text-sm font-normal text-gray-500 mb-4`}`}>{anime.title?.native}</div>
            <div css={css`${tw`absolute bottom-0`}`}>
              <div css={css`${tw`text-sm font-medium text-pink-500 mb-4`}`}>{studioName}</div>
              <div css={css`${tw`text-sm font-normal text-gray-500 mb-4`}`}>{anime.format} - {anime.episodes} episodes</div>
              <div css={css`${tw`flex`}`}>
                {
                  anime.genres?.slice(0, 2).map(genre => 
                    <div css={css`${tw`text-[10px] font-normal text-gray-500 mb-4 px-2 py-1 rounded-full bg-yellow-500 text-white mx-1 mb-3`}`}> {genre} </div>
                  )
                }
              </div>
            </div>
          </div> 
        </AnimeCardContent>
        <div key={`anime-title-${anime.id}`} css={animeCardTitle}>{anime.title?.romaji}</div>
      </AnimeCard>
      
    </>
  )
}

export default AnimeItem
