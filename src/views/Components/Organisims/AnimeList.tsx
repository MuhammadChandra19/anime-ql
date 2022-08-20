import React from 'react'
import { AnimeList_Page_media } from '../../../graphql/animeList/__generated__/AnimeList'
import { AnimeContainer, AnimeListItem } from '../../styles/AnimeStyles'
import AnimeItem from '../Molecules/AnimeItem'

type AnimeListProps = {
  animeList: AnimeList_Page_media[]
  isLoading: boolean
  error: boolean
}

const AnimeList:React.FC<AnimeListProps> = ({ animeList, isLoading, error }) => {

  if (isLoading) {
    return <AnimeContainer>Loading...</AnimeContainer>
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