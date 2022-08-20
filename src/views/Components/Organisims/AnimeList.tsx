import React from 'react'
import tw, { css } from 'twin.macro'
import { AnimeList_Page_media } from '../../../graphql/animeList/__generated__/AnimeList'
import { AnimeContainer, AnimeListItem } from '../../styles/AnimeStyles'
import AnimeItem from '../Molecules/AnimeItem'
import AnimeItemSkeleton from '../Molecules/AnimeITemSceleton'

type AnimeListProps = {
  animeList: AnimeList_Page_media[]
  isLoading: boolean
  error: boolean
}

const AnimeList:React.FC<AnimeListProps> = ({ animeList, isLoading, error }) => {
  
  if (isLoading) {
    return <AnimeContainer css={css`${tw`min-h-screen w-full text-center bg-gray-400`}`}>Loading...</AnimeContainer>
        
    
  }

  if (error) {
    return <AnimeContainer>ERROR</AnimeContainer>
  }

  return (
    <AnimeListItem>
    {
      animeList.map((anime, idx) => {
        if(anime) {
          return (<AnimeItem key={`anime-card-${idx}`} anime={anime!}/>)
        }
      })
    }
    </AnimeListItem>
  )
}

export default AnimeList