import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import tw, { css } from "twin.macro"
import { QUERY_MEDIA_DETAIL } from '../graphql/animeDetail/queries.graphql'
import { AnimeDetailVariables, AnimeDetail } from '../graphql/animeDetail/__generated__/AnimeDetail'
import { AnimeDetailBanner, AnimeDetiailHeading, Gradient } from './styles/AnimeStyles'
import { primaryButton } from './styles/components/Button'
import { Container } from './styles/LayoutStyles'
import xss from 'xss'

const Detail: React.FC = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery<AnimeDetail, AnimeDetailVariables>(QUERY_MEDIA_DETAIL, { variables: { id: parseInt(id || '', 10) }})

  if(loading) {
    return <div>loading .....</div>
  }

  const bannerStyle = data?.Media?.bannerImage ? `background-image: url("${data?.Media?.bannerImage}")` : ''

  return (
    <div css={tw`bg-white min-h-screen`}>
      <AnimeDetailBanner css={css`${bannerStyle}`}>
        <Gradient />
      </AnimeDetailBanner>
      <Container css={css`padding-top: 0 !important;`}>
        <AnimeDetiailHeading>
          <div css={tw`w-full relative grid md:grid-cols-1 sm:grid-cols-2 gap-5`}>
            <div css={tw`max-w-full bg-gray-400 overflow-hidden mt-[-100px]`}>
              <img 
                alt={data?.Media?.title?.native || ''} 
                src={data?.Media?.coverImage?.extraLarge || ''}
                css={tw`w-full h-full object-cover`}
              />
            </div>
            <button css={primaryButton}>Add to Collection</button>
          </div>
          <div 
            css={tw`w-full md:col-span-4 p-2`} 
            dangerouslySetInnerHTML={{ __html: xss(data?.Media?.description || '')}} 
          />
        </AnimeDetiailHeading>
      </Container>
    </div>
  )
}

export default Detail