import { gql } from '@apollo/client';

export const QUERY_MEDIA_LIST = gql`
  query AnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
      }
      media(type: ANIME, averageScore_greater: 75, sort: START_DATE_DESC) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          color
        }
        status
        season
        seasonYear
        studios {
          nodes {
            id
          }
          edges {
            node {
              id
              name
              isAnimationStudio
              siteUrl
            }
            isMain
          }
        }
        genres
        meanScore
        episodes
        duration
        format
      }
    }
  }
`;
