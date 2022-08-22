import React from 'react'
import { primaryButton, warningButton } from '../../styles/components/Button'
import { Modal } from '../Molecules/Modal'

type ModalConfirmationProps = {
  title: string
  description: string
  onConfirm: () => void
  onCancel: () => void
  isVisible: boolean
}
const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ isVisible, onCancel, onConfirm, title, description }) => {

  return (
    isVisible ? 
    <Modal  onClose={onCancel} title={title}>
      <div tw='w-full'>
        <div tw='text-gray-700 font-medium text-base mb-8'>{ description }</div>
        <div tw='flex'>
          <button css={warningButton} tw='w-full mr-1' onClick={onCancel}>Cancel</button>
          <button css={primaryButton} tw='w-full' onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </Modal> 
    : null
  )
}

export default ModalConfirmation
