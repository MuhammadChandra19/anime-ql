import React, { useEffect, useState } from 'react'
import { useAnimeListQuery } from '../../../generated/graphql'
import { AnimeContainer, AnimeListItem } from '../../styles/AnimeStyles';
import AnimeItem from '../Molecules/AnimeItem';
import Pagination from '../Molecules/Pagination';

const AnimeList:React.FC = () => {
  const { data, loading, error, refetch } = useAnimeListQuery({variables: {page: 1, perPage: 9}})
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(false)

  if (loading || isLoading) {
    return <AnimeContainer>Loading...</AnimeContainer>;
  }

  if (error || !data) {
    return <AnimeContainer>ERROR</AnimeContainer>;
  }

  const pageChange = async (page: number) => {
    try {
      setLoading(true)
      await refetch({page, perPage: 9})
          
      if(data.Page?.pageInfo?.currentPage) {
        setPage(data.Page?.pageInfo?.currentPage)
      }
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
    
  }

  // useEffect(() => {
  //   refetch({ page, perPage: 9 })
  // }, [page])
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
      <Pagination 
        action={(value) => pageChange(value)}
        hasNextPage={data.Page?.pageInfo?.hasNextPage || false } 
        currentPage={page}
      />
    </AnimeContainer>
  )
}

export default AnimeList