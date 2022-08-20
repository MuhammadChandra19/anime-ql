import { gql } from '@apollo/client';

export const QUERY_MEDIA_LIST = gql`
  query AnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
      }
      mediaTrends {
        media {
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
        }
      }
    }
  }
`;
