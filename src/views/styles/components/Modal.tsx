import tw, { styled } from 'twin.macro';

export const ModalFade = styled.div`${tw`
  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-800/[.8]
`}`


export const ModalDialog = styled.div`${tw`
  relative w-auto my-6 mx-auto max-w-3xl
`}`

export const ModalContent = styled.div`${tw`
  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
`}`

export const ModalHeader = styled.div`${tw`
  flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t
`}`

export const ModalHeaderTitle = styled.div`${tw`
  text-base font-medium
`}`

export const ModalHeaderClose = styled.div`${tw`
  bg-transparent border-0 text-black float-right cursor-pointer
`}
  span {
    text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full
  }
`

export const ModalBody = styled.div`${tw`
  relative p-4 flex-auto
`}`



