import React, { useEffect, useState } from 'react'
import { primaryButton } from '../../styles/components/Button'
import { Modal } from '../Molecules/Modal'
type EditCollectionModalProps = {
  onSave: (name: string) => void
  isVisible: boolean
  onClose: () => void
  value: string
}
const EditCollectionModal: React.FC<EditCollectionModalProps> = ({ isVisible, onClose, onSave, value }) => {
  const [newName, setNewName] = useState('')

  useEffect(() => {
    setNewName(value)
  }, [value])

  return (
    isVisible ? 
    <Modal onClose={onClose} title='Edit Collection Name'>
      <div tw='w-full flex'>
        <input 
          value={newName}
          onChange={(e) => setNewName(e.target.value)} 
          tw="
            flex-1 block w-full
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
        <button css={primaryButton} onClick={() => onSave(newName)}>Submit</button>
      </div>
    </Modal> 
    : null
  )
}

export default EditCollectionModal
