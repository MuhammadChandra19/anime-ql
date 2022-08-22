import React, { useState } from 'react'
import { AnimeDetail_Media } from '../../../graphql/animeDetail/__generated__/AnimeDetail'
import { createNewCollections, getCollections, pushNewAnimeToCollection } from '../../../services/Collections'
import { primaryButton } from '../../styles/components/Button'
import { Modal } from '../Molecules/Modal'

type ModalProps = {
  isVisible: boolean
  onClose: () => void
  selectedAnime: AnimeDetail_Media
  onSave: (collectionName: string) => void
}
const CollectionModal: React.FC<ModalProps> = ({ isVisible, onClose, selectedAnime, onSave }) => {
  const existingCollections = getCollections() || []
  const [collectionList, setCollectionList] = useState(existingCollections)

  const pushNewCollection = () => {
    let collectionName
    let i = 0
    do {
      collectionName = 'new collection'
      i = i + 1
      collectionName += ` ${i}`
    } while(collectionList[collectionName])
    setCollectionList({ ...collectionList, [collectionName]: [] })
    createNewCollections(collectionName)
  }

  const saveCollections = (key: string) => {
    pushNewAnimeToCollection(key,  selectedAnime)
    onSave(key)
  }

  return (
    isVisible ? 
    <Modal onClose={onClose} title="Collections">
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
        onClick={() => pushNewCollection()}
      >
        Add new Collection
      </button>
    </div>
  </Modal> : null
  )
}

export default CollectionModal