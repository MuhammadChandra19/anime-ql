import React, { useState } from 'react'
import { AnimeDetail_Media } from '../../../graphql/animeDetail/__generated__/AnimeDetail'
import { getCollections, pushNewAnimeToCollection } from '../../../services/Collections'
import { primaryButton } from '../../styles/components/Button'
import { 
  ModalBody, 
  ModalContent,
  ModalDialog,
  ModalFade,
  ModalHeader,
  ModalHeaderClose,
  ModalHeaderTitle
} from '../../styles/components/Modal'

type ModalProps = {
  isVisible: boolean
  onClose: () => void
  selectedAnime: AnimeDetail_Media
  onSave: (collectionName: string) => void
}
const CollectionModal: React.FC<ModalProps> = ({ isVisible, onClose, selectedAnime, onSave }) => {
  const existingCollections = getCollections() || []
  const [collectionList, setCollectionList] = useState(existingCollections)

  const createNewCollection = () => {
    let collectionName
    let i = 0
    do {
      collectionName = 'new collection'
      i = i + 1
      collectionName += ` ${i}`
    } while(collectionList[collectionName])
    setCollectionList({ ...collectionList, [collectionName]: [] })
  }

  const saveCollections = (key: string) => {
    pushNewAnimeToCollection(key,  selectedAnime)
    onSave(key)
  }

  return (
    isVisible ? 
    <ModalFade>
      <ModalDialog>
        <ModalContent tw='md:w-[500px]'>
          <ModalHeader>
            <ModalHeaderTitle>Collections</ModalHeaderTitle>
            <ModalHeaderClose onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </ModalHeaderClose>
          </ModalHeader>
          <ModalBody>
            <div tw="w-full">
              {
                Object.keys(collectionList).map((value, idx) => (
                  <div tw="flex justify-between mb-2" key={`collection-${idx}`}>
                    <div tw="flex-1 block w-full mr-1 text-gray-700 font-medium text-lg">
                      <span tw="mr-2 p-1">{value}</span>
                    </div>
                    <button css={primaryButton} tw="mr-1" onClick={() =>  saveCollections(value)}>
                      <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))
              }
              <button 
                css={primaryButton} 
                tw="w-full" 
                onClick={() => createNewCollection()}
              >
                Add new Collection
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </ModalDialog>
    </ModalFade> 
    : null
  )
}

export default CollectionModal