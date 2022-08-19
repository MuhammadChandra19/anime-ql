import React from 'react'
import { useAnimeListQuery } from '../../../generated/graphql'
import { AnimeContainer, AnimeListItem } from '../../styles/AnimeStyles';
import AnimeItem from '../Molecules/AnimeItem';

const AnimeList:React.FC = () => {
  const { data, loading, error } = useAnimeListQuery({variables: {page: 1, perPage: 30}})

  if (loading) {
    return <AnimeContainer>Loading...</AnimeContainer>;
  }

  if (error || !data) {
    return <AnimeContainer>ERROR</AnimeContainer>;
  }
  return (
    <AnimeContainer>
      <AnimeListItem>
      {
        data.Page?.media?.map(anime => {
          if(anime) {
            return (<AnimeItem key={`anime-card-${anime.id}`} anime={anime}/>)
          }
        })
      }
      </AnimeListItem>
    </AnimeContainer>
  )
}

export default AnimeList