import { gql } from '@apollo/client';

export const QUERY_TOP = gql`
  query TopAnime {
    Page(page:1,perPage:20){
      media(sort:SCORE_DESC,type:ANIME,isAdult:false){
        ...media
      }
    }
  }
  fragment media on Media{
    id 
    title {
      userPreferred
    }
    coverImage {
      extraLarge 
      large 
      medium
      color
    }
    startDate{
      year 
      month 
      day
    }
    endDate{
      year 
      month 
      day
    }
    bannerImage 
    season 
    seasonYear 
    description 
    type 
    format 
    status(version:2)
    episodes 
    duration 
    chapters 
    volumes 
    genres 
    isAdult 
    averageScore 
    popularity 
    mediaListEntry{
      id status
    }
    nextAiringEpisode{
      airingAt 
      timeUntilAiring 
      episode
    }
    studios(isMain:true){
      edges{
        isMain 
        node{
          id name
        }
      }
    }
  }
`