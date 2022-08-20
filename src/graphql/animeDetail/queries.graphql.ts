import { gql } from '@apollo/client';

export const QUERY_MEDIA_DETAIL = gql`
  query AnimeDetail($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      description
      status
      format
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      bannerImage
      episodes
      duration
      chapters
      type
      coverImage {
        extraLarge
        large
        medium
        color
      }
      averageScore
    }
  }
`;
