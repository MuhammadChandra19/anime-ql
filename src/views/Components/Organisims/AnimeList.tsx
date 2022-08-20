import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { QUERY_MEDIA_LIST } from '../../../graphql/animeList/queries.graphql';
import { AnimeList as AnimeListType, AnimeListVariables } from '../../../graphql/animeList/__generated__/AnimeList';
import { AnimeContainer, AnimeListItem } from '../../styles/AnimeStyles';
import AnimeItem from '../Molecules/AnimeItem';
import Pagination from '../Molecules/Pagination';

const AnimeList:React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useQuery<AnimeListType, AnimeListVariables>(QUERY_MEDIA_LIST, { variables : { page , perPage: 18 }})

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
            return (<AnimeItem key={`anime-card-${anime?.id}`} anime={anime!}/>)
          }
        })
      }
      </AnimeListItem>
      <Pagination 
        action={(value) => setPage(value)}
        hasNextPage={data.Page?.pageInfo?.hasNextPage || false } 
        currentPage={page}
      />
    </AnimeContainer>
  )
}

export default AnimeList