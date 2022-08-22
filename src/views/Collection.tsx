import React, { useState } from 'react'
import { css } from 'twin.macro'
import { getCollections, removeCollection } from '../services/Collections'
import ModalConfirmation from './Components/Organisims/ModalConfirmation'
import { AnimeContainer, AnimeListItem, CollectionCardBanner } from './styles/AnimeStyles'
import { primaryButton , warningButton} from './styles/components/Button'
import { Container } from './styles/LayoutStyles'

const Collection: React.FC = () => {
  const savedCollectionList = getCollections()
  const [collectionList, setCollectionList] = useState(savedCollectionList)
  const [isConfirmationModalVisible, setConfirmationModal] = useState(false)
  const [tempDeletedCollection, setTempDeletedCollection] = useState('')

  const getHeaderCardStyle = (name: string) => {
    const firstBanner = savedCollectionList[name].find(anime => anime.bannerImage !== null)
    if(firstBanner) {
      return `background-image: url("${firstBanner.bannerImage}")`
    } 

    return ''
  }

  const confirmDeleteCollection = () => {
    const tempCollection = collectionList
    delete tempCollection[tempDeletedCollection]
    setCollectionList(tempCollection)
    removeCollection(tempDeletedCollection)
    setConfirmationModal(false)
  }

  return (
    <Container>
      <div tw='flex justify-between'>
        <div tw='text-xl font-bold mb-5'>Collection List</div>
        <button css={primaryButton}>Add new collection</button>
      </div>
      <AnimeContainer>
        <AnimeListItem>
        {
          Object.keys(collectionList).map((collection, idx) => (
            <div 
              key={`collection-item-${idx}`} 
              tw="cursor-pointer no-underline rounded-lg w-full grid grid-cols-1 hover:shadow-md overflow-hidden bg-white"
            >
              <CollectionCardBanner 
                tw='w-full h-[200px] bg-blue-800' 
                css={css`${getHeaderCardStyle(collection)}`}
              ></CollectionCardBanner>
              <div tw='p-1 flex justify-between'>
                <div tw='m-2'>{collection}</div>
                <button 
                  css={warningButton} 
                  tw="m-1 p-2"
                  onClick={() => {
                    setTempDeletedCollection(collection)
                    setConfirmationModal(true)
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        }
        </AnimeListItem>
      </AnimeContainer>
      <ModalConfirmation 
        isVisible={isConfirmationModalVisible} 
        description={`Once delete ${tempDeletedCollection} will be erased from your collection list`} 
        title={`Are you sure want to delete ${tempDeletedCollection}`}
        onCancel={() => setConfirmationModal(false)}
        onConfirm={confirmDeleteCollection}
      />
    </Container>
  )
}

export default Collection
