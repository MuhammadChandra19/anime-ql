import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { AnimeList_Page_media as Media } from '../../../graphql/animeList/__generated__/AnimeList'
import { AnimeCard, AnimeCardContent, AnimeCover, AnimeCardAction } from '../../styles/AnimeStyles'

type AnimeItemProps = {
  anime: Media, 
  onClick?: (anime: Media) => void
  isCollection?: boolean
}

const AnimeItem: React.FC<AnimeItemProps> = ({ anime, onClick, isCollection = false   }) => {
  const studioName = anime.studios?.edges?.filter(studio => studio?.isMain)[0]?.node?.name
  return (
    <div css={tw`relative`} data-testid={`anime-item-${anime.id}`}>
    {
      isCollection && 
        <AnimeCardAction 
          onClick={() => onClick && onClick(anime)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-9" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </AnimeCardAction>
    }
    <Link to={`/detail/${anime.id}`}>
      <AnimeCard key={`anime-card-${anime.id}`}>
        <AnimeCardContent>
          <AnimeCover>
            <img alt={anime.title?.english || ''} src={anime.coverImage?.extraLarge || ''} />
          </AnimeCover>
          <div css={tw`p-1 relative`}>
            <div css={tw`flex justify-between text-sm mb-8`}>
              <div css={tw`text-sm text-gray-500 font-medium py-1.5`}>{anime.season} {anime.seasonYear}</div>
              <div css={tw`text-xl text-blue-400 font-bold`}>{anime.meanScore}</div>
            </div>
            <div css={tw`text-sm font-normal text-gray-500 mb-4`}>{anime.title?.romaji}</div>
            <div css={tw`absolute bottom-0`}>
              <div css={tw`text-sm font-medium text-pink-500 mb-4`}>Studio - {studioName}</div>
              <div css={tw`text-sm font-normal text-gray-500 mb-4`}>{anime.format} - {anime.episodes} episodes</div>
              <div css={tw`flex`}>
                {
                  anime.genres?.slice(0, 2).map((genre, idx) => 
                    <div key={`genre-${idx}`} css={tw`text-[10px] font-normal text-gray-500 mb-4 px-2 py-1 rounded-full bg-yellow-500 text-white mx-1 mb-3`}> {genre} </div>
                  )
                }
              </div>
            </div>
          </div> 
        </AnimeCardContent>
        {/* <div key={`anime-title-${anime.id}`} css={animeCardTitle}>{anime.title?.romaji}</div> */}
      </AnimeCard>
    </Link>
    </div>
  )
}

export default AnimeItem
