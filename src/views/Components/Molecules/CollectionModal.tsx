import React from 'react'
import { ModalBody, ModalContent, ModalDialog, ModalFade, ModalHeader, ModalHeaderClose, ModalHeaderTitle } from '../../styles/components/Modal'
const CollectionModal: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    isVisible ? 
    <ModalFade>
      <ModalDialog>
        <ModalContent>
          <ModalHeader>
            <ModalHeaderTitle>title</ModalHeaderTitle>
            <ModalHeaderClose />
          </ModalHeader>
          <ModalBody>test</ModalBody>
        </ModalContent>
      </ModalDialog>
    </ModalFade> 
    : null
  )
}

export default CollectionModal