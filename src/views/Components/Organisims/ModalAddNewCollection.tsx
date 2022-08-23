import React, { useState } from 'react'
import { getCollectionlist } from '../../../services/Collections'
import { disabledPrimaryButton, primaryButton } from '../../styles/components/Button'
import { Modal } from '../Molecules/Modal'

type ModalAddNewCollectionProps = {
  onSave: (newName: string) => void
  isVisible: boolean
  onClose: () => void
}

const ModalAddNewCollection: React.FC<ModalAddNewCollectionProps> = ({ onSave, isVisible, onClose}) => {
  const [value, setValue] = useState('')
  const [isDuplicated, setIsDuplicated] = useState(false)
  const collectionList = getCollectionlist()
  const checkDuplication = (newName: string) => {
    if(collectionList[newName]) {
      setIsDuplicated(true)
    } else {
      setIsDuplicated(false)
    }
    setValue(newName)
  }
  return (
    isVisible ?
      <Modal onClose={onClose} title='Add a Collection'>
        <div tw='w-full flex mb-4'>
          <div tw='block w-full mr-1'>
            <input 
              value={value}
              onChange={(e) => checkDuplication(e.target.value)} 
              tw="
                flex-1 block w-full
                h-[34px]
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                px-1
                mr-1
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
            />
            { isDuplicated ? <div tw='italic text-xs mt-[4px] text-red-600'>duplicated name</div> : null }
          </div>
          <button 
            css={isDuplicated || value.length === 0 ? disabledPrimaryButton : primaryButton} 
            onClick={() => onSave(value)} 
            disabled={isDuplicated}
          >
            Submit
          </button>
        </div>
      </Modal>
      : null
  )
}

export default ModalAddNewCollection
