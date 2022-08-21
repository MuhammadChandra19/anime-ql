import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { AnimeList as AnimeListType, AnimeListVariables, AnimeList_Page_media } from '../graphql/animeList/__generated__/AnimeList';
import { QUERY_MEDIA_LIST } from '../graphql/animeList/queries.graphql';
import AnimeList from './Components/Organisims/AnimeList'
import { AnimeContainer } from './styles/AnimeStyles';
import Pagination from './Components/Molecules/Pagination';
import { Container } from './styles/LayoutStyles';

const Home: React.FC = () => {
  const [page, setPage] = useState(1)
  const [isModalVisible, setModalVisibility] = useState(false)
  const { data, loading, error } = useQuery<AnimeListType, AnimeListVariables>(QUERY_MEDIA_LIST, { variables : { page , perPage: 18 }})

  const animeList = data?.Page?.media as AnimeList_Page_media[]
  const errorFecth = (error || !data) as boolean
  return (
   <Container>
    <AnimeContainer>
      <AnimeList animeList={animeList} error={errorFecth} isLoading={loading} onClick={() => setModalVisibility(true)}/>
      <Pagination 
        action={(value) => setPage(value)}
        hasNextPage={data?.Page?.pageInfo?.hasNextPage || false } 
        currentPage={page}
      />
    </AnimeContainer>
    {/* <CollectionModal isVisible={isModalVisible} onClose={() => setModalVisibility(false)}/> */}
   </Container>
  )
}

export default Home
