import tw, { styled } from 'twin.macro'


export const Container = styled.div`
  ${tw`xl:container mx-auto min-h-screen`}
  @media (min-width: 480px) {
    ${tw`sm:container mx-auto`}
  }
  @media (min-width: 768px) {
    ${tw`md:container`}
  }
`