
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { AnimeList_Page_media } from '../../../graphql/animeList/__generated__/AnimeList'
import { getCollectionlist, removeAnime } from '../../../services/Collections'
import AnimeItem from '../../Components/Molecules/AnimeItem'
import ModalConfirmation from '../../Components/Organisims/ModalConfirmation'
import { AnimeListItem } from '../../styles/AnimeStyles'
import { Container } from '../../styles/LayoutStyles'

const CollectionDetail: React.FC = () => {
  const { id } = useParams()
  const list = getCollectionlist()
  const [collections, setCollections] = useState(list[id!] as unknown as AnimeList_Page_media[])
  const [selectedAnime, setSelectedAnime] = useState({} as AnimeList_Page_media)
  const [isDeleteConfirmationVisible, setDeleteConfirmation] = useState(false)

  const removeAnimeFromCollection = () => {
    removeAnime(id!, selectedAnime.id)
    const newList = getCollectionlist()
    setCollections(newList[id!] as unknown as AnimeList_Page_media[])
    setDeleteConfirmation(false)
  }

  const showDeleteConfirmation = (anime: AnimeList_Page_media) => {
    setSelectedAnime(anime)
    setDeleteConfirmation(true)
  }
  return (
    <Container>
      {
        collections.length > 0 ? (
          <AnimeListItem>
          {
            collections.map((anime, idx) => {
              if(anime) {
                return (<AnimeItem key={`anime-card-${idx}`} anime={anime!} isCollection onClick={showDeleteConfirmation}/>)
              }
            })
          }
          </AnimeListItem>
        ): <div>Collection Empty</div>
      }
      <ModalConfirmation 
        title={`Delete ${selectedAnime.title?.romaji}`}
        description={`Are you sure want to delete ${selectedAnime.title?.romaji} from ${id} ?`}
        isVisible={isDeleteConfirmationVisible}
        onCancel={() => setDeleteConfirmation(false)}
        onConfirm={removeAnimeFromCollection}
      />
    </Container>
  )
}

export default CollectionDetail