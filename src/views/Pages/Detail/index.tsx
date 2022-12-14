import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import tw, { css } from "twin.macro"
import { QUERY_MEDIA_DETAIL } from '../../../graphql/animeDetail/queries.graphql'
import { AnimeDetailVariables, AnimeDetail, AnimeDetail_Media } from '../../../graphql/animeDetail/__generated__/AnimeDetail'
import { AnimeDetailBanner, AnimeDetiailHeading, Gradient } from '../../styles/AnimeStyles'
import { primaryButton } from '../../styles/components/Button'
import { Container } from '../../styles/LayoutStyles'
import xss from 'xss'
import CollectionModal from '../../Components/Organisims/CollectionModal'
import { getAnimeStorage, getCollectionNames } from '../../../services/Collections'
import { Link } from 'react-router-dom'

const Detail: React.FC = () => {
  const { id } = useParams()
  const list = getAnimeStorage(id || '')
  const [isModalVisible, toggleModal] = useState(false)
  const [collectionList, setCollectionList] = useState(list?.collectionIds || {})
  const { data, loading, error } = useQuery<AnimeDetail, AnimeDetailVariables>(
    QUERY_MEDIA_DETAIL, 
    { variables: { id: parseInt(id || '0', 10) } }
  )

  if(loading) {
    return <div>loading .....</div>
  }

  if(error) {
    return <div>error</div>
  }
  const hasBanner = data?.Media?.bannerImage !== null
  const bannerStyle = hasBanner ? `background-image: url("${data?.Media?.bannerImage}")` : ''

  const onSaveToCollection = () => {
    const list = getAnimeStorage(id || '')
    setCollectionList(list.collectionIds || {})
    toggleModal(false)
  }

  return (
    <>
      <div css={tw`bg-white`}>
        {
          hasBanner ? (
            <AnimeDetailBanner css={css`${bannerStyle}`}>
              <Gradient />
            </AnimeDetailBanner>
          ) : null
        }
        <Container css={css`padding-top: 0 !important;`}>
          <AnimeDetiailHeading>
            <div css={tw`w-full relative grid grid-cols-[150px auto] md:grid-cols-1 gap-5`}>
              <div css={`${ hasBanner ? 'margin-top: -100px' : 'margin-top: 0.5rem'}`} tw='max-w-full bg-gray-400 overflow-hidden'>
                <img 
                  alt={data?.Media?.title?.native || ''} 
                  src={data?.Media?.coverImage?.extraLarge || ''}
                  css={tw`w-full h-full object-cover`}
                />
              </div>
              <div tw="relative">
                <button css={primaryButton} tw="md:relative absolute bottom-0 w-full" onClick={() => toggleModal(true)}>Add to List</button>
              </div>
            </div>
            <div tw='w-full'>
              <div tw='mb-2' data-testid='anime-title'>{ data?.Media?.title?.romaji}</div>
              <div 
                css={tw`w-full p-2 text-base text-gray-500`} 
                dangerouslySetInnerHTML={{ __html: xss(data?.Media?.description || '')}} 
              />
            </div>
          </AnimeDetiailHeading>
        </Container>
        <CollectionModal 
          onClose={() => toggleModal(false)} 
          isVisible={isModalVisible}
          selectedAnime={data?.Media || {} as AnimeDetail_Media}
          onSave={onSaveToCollection}
        />
      </div>
      <Container tw='md:grid-cols-[210px auto] sm:grid-cols-1 gap-5 grid p-2 relative'>
        <div>
          {
            Object.keys(collectionList).length > 0 ? (
              <div tw='w-full rounded p-2 bg-white flex sm:block flex-wrap mb-2' data-testid='collection-names'>
                <div tw='text-sm font-medium text-gray-600' >Saved on</div>
                {
                  Object.keys(collectionList).map(id => 
                    <Link to={`/collection/${getCollectionNames()[id]}`} key={`collection-${id}`} data-testid={`collection-${id}`}>
                      <div tw='text-xs font-normal text-gray-400 cursor-pointer hover:text-yellow-400'>{getCollectionNames()[id]}</div>
                    </Link>
                  )
                }
              </div>
            ) : null
          }
          <div tw='w-full rounded p-2 bg-white flex sm:block flex-wrap mb-2'>
            <div tw='mb-2 mr-2'>
              <div tw='text-sm font-medium text-gray-600'>Format</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.format}</div>
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>Volumes</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.volumes || '-' }</div>
            </div>
            <div tw='mb-2 mr-2'>
              <div tw='text-sm font-medium text-gray-600'>Episode Duration</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.duration || '-' } mins</div>
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>Status</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.status }</div>
            </div>
            <div tw='mb-2 mr-2'>
              <div tw='text-sm font-medium text-gray-600'>Genres</div>
              {
                data?.Media?.genres?.map((genre, idx) => (
                  <div tw='text-xs font-normal text-gray-400' key={`genre-${idx}`}>{ genre }</div>
                ))
              }
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>Mean Score</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.meanScore }</div>
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>Romaji</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.title?.romaji || '-' }</div>
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>English</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.title?.english || '-' }</div>
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>Native</div>
              <div tw='text-xs font-normal text-gray-400'>{data?.Media?.title?.native || '-' }</div>
            </div>
            <div tw='mb-2 mr-2 '>
              <div tw='text-sm font-medium text-gray-600'>Studios</div>
              {
                data?.Media?.studios?.edges && data.Media.studios.edges.length > 0 ? (
                  data.Media.studios.edges.map((studio, idx) => (
                    <div tw='text-xs font-normal text-gray-400' key={`studio-${idx}`}>{studio?.node?.name || '-' }</div>
                  ))
                ): <div tw='text-xs font-normal text-gray-400'>-</div>
              }
            </div>
            
          </div>
        </div>
        <div tw='w-full'>
          <div tw='text-center rounded bg-white p-2  mb-2'>Reviews</div>
          {
            data?.Media?.reviews?.edges && data.Media.reviews.edges?.length > 0 ? (
              data.Media.reviews.edges?.map((review, idx) => (
                <div tw='w-full flex justify-between rounded bg-white p-2 mb-2' key={`review-${idx}`}>
                  <div tw='rounded-full bg-gray-400 w-8 h-8 bg-gray-400'>
                    <img tw='rounded-full bg-gray-400 w-8 h-8' src={review?.node?.user?.avatar?.medium || ''} />
                  </div>
                  <div tw='my-auto px-1 text-xs font-normal text-gray-400'>{review?.node?.summary}</div>
                  <div tw='my-auto text-sm font-normal text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    {review?.node?.score}
                  </div>
                </div>
              ))
            ): <div tw='w-full rounded bg-white text-center p-2 '>No Reviews..</div>
          }
        </div>
      </Container>
    </>
  )
}

export default Detail