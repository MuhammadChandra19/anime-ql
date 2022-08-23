import React, { useState } from 'react'
import { css } from 'twin.macro'
import { getCollectionlist, deleteCollection, updateCollectionName } from '../services/Collections'
import EditCollectionModal from './Components/Organisims/EditCollectionModal'
import ModalConfirmation from './Components/Organisims/ModalConfirmation'
import { AnimeContainer, AnimeListItem, CollectionCardBanner } from './styles/AnimeStyles'
import { dangerButton, primaryButton , warningButton} from './styles/components/Button'
import { Container } from './styles/LayoutStyles'

const Collection: React.FC = () => {
  const savedCollectionList = getCollectionlist()
  const [collectionList, setCollectionList] = useState(savedCollectionList)
  const [isConfirmationModalVisible, setConfirmationModal] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState('')
  const [isEditModalVisible, setEditModal] = useState(false)

  const getHeaderCardStyle = (name: string) => {
    const firstBanner = collectionList[name].find(anime => anime.bannerImage !== null)
    if(firstBanner) {
      return `background-image: url("${firstBanner.bannerImage}")`
    } 
    return ''
  }

  const confirmDeleteCollection = () => {
    const tempCollection = collectionList
    delete tempCollection[selectedCollection]
    setCollectionList(tempCollection)
    deleteCollection(selectedCollection)
    setConfirmationModal(false)
    setSelectedCollection('')
  }

  const confirmUpdateCollectionName = (newValue: string) => {
    const tempCollection = collectionList
    const newCollection = tempCollection[selectedCollection]
    delete tempCollection[selectedCollection]
    setCollectionList({ ...tempCollection, [newValue]: newCollection })
    updateCollectionName(selectedCollection, newValue)
    setEditModal(false)
    setSelectedCollection('')
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
                <div tw='flex'>
                  <button 
                    css={dangerButton} 
                    tw="m-1 p-2"
                    onClick={() => {
                      setSelectedCollection(collection)
                      setConfirmationModal(true)
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    css={warningButton} 
                    tw="m-1 p-2"
                    onClick={() => {
                      setSelectedCollection(collection)
                      setEditModal(true)
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
        </AnimeListItem>
      </AnimeContainer>
      <ModalConfirmation 
        isVisible={isConfirmationModalVisible} 
        description={`Once deleted ${selectedCollection} will be erased from your collection list`} 
        title={`Are you sure want to delete ${selectedCollection}`}
        onCancel={() => setConfirmationModal(false)}
        onConfirm={confirmDeleteCollection}
      />
      <EditCollectionModal 
        isVisible={isEditModalVisible} 
        onClose={() => setEditModal(false)}
        onSave={confirmUpdateCollectionName}
        value={selectedCollection}
      />
    </Container>
  )
}

export default Collection
