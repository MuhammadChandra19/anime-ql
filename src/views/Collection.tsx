import React from 'react'
import { css } from 'twin.macro'
import { getCollections } from '../services/Collections'
import { AnimeContainer, AnimeListItem, CollectionCardBanner } from './styles/AnimeStyles'
import { Container } from './styles/LayoutStyles'

const Collection: React.FC = () => {
  const collectionList = getCollections()

  const getHeaderCardStyle = (name: string) => {
    const firstBanner = collectionList[name].find(anime => anime.bannerImage !== null)
    if(firstBanner) {
      return `background-image: url("${firstBanner.bannerImage}")`
    } 

    return ''
  }
  return (
    <Container>
      <div tw='text-xl font-bold mb-5'>Collection List</div>
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
              <div tw='p-1'>
                <div tw='m-2'>{collection}</div>
              </div>
            </div>
          ))
        }
        </AnimeListItem>
      </AnimeContainer>
    </Container>
  )
}

export default Collection
