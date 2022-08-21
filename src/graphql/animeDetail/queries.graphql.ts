import { gql } from '@apollo/client';

export const QUERY_MEDIA_DETAIL = gql`
  query AnimeDetail($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      bannerImage
      description
      coverImage {
        extraLarge
        color
      }
      status
      season
      seasonYear
      studios {
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
      volumes
      format
      reviews {
        edges {
          node {
            id
            summary
            score
            user {
              id
              avatar {
                large
                medium
              }
            }
            rating
          }
        }
      }
    }
  }
`;
