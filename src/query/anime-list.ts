import { gql } from '@apollo/client';

export const QUERY_MEDIA_LIST = gql`
  query AnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
      }
      media {
        id
        idMal
        title {
          romaji
          english
          native
          userPreferred
        }
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        status # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      }
    }
  }
`;
