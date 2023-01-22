import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_TOP } from '../../../graphql/top/queries.graphql'
import { TopAnime, TopAnime_Page_media } from '../../../graphql/top/__generated__/TopAnime'

const TopAnimeList:  React.FC = () => {
  const  { data, loading } = useQuery<TopAnime>(QUERY_TOP)

  const TopItem = (media : TopAnime_Page_media) => {
    return (
      <div 
        tw="inline-grid min-h-[80px] rounded shadow-md grid-cols-[48px auto] bg-gray-50 hover:shadow-md p-[8px]"
      >
        <div tw='rounded-sm overflow-hidden relative'>
          <img src={media.coverImage?.medium || ''} tw="h-full left-0 object-cover absolute top-0 w-full"/>
        </div>
        <div tw='p-[8px] min-w-0 gap-2.5 grid-cols-[minmax(auto, calc(100% - 440px)) 130px 130px 150px] grid'>
          <div tw='relative'>
            <div tw='text-gray-900 text-base font-semibold mb-[8px]'>
              {media.title?.userPreferred}
            </div>
            <div tw='flex items-center flex-wrap h-[18px] overflow-hidden ml-[-2px]'>
              {
                media.genres?.map(genre => (
                  <div key={genre} tw='text-[10px] font-normal text-gray-500 mb-4 p-[0 10px] rounded-lg bg-yellow-500 text-white mx-1 mb-3'>{genre}</div>
                ))
              }
            </div>
            
          </div>
          <div>
            {media.averageScore}%
            <div tw='mt-[4px]'>
              {media.popularity} users
            </div>
          </div>
          <div>
            {media.type}
            <div tw='mt-[4px]'>
              {media.popularity} users
            </div>
          </div>
          <div>
            {media.season} {media.seasonYear}
            <div tw='mt-[4px]'>
              {media.status}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div tw="grid grid-cols-1 gap-6 cursor-pointer">
      100 Top Anime
      {
        loading ? <div>is loading</div> : 
          data?.Page?.media?.map(anime => 
            <TopItem key={anime?.id}  { ...anime} />
          )
        
      }
    </div>
  )
}

export default TopAnimeList