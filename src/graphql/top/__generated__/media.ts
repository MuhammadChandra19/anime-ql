/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaSeason, MediaType, MediaFormat, MediaStatus, MediaListStatus } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: media
// ====================================================

export interface media_title {
  __typename: "MediaTitle";
  /**
   * The currently authenticated users preferred title language. Default romaji for non-authenticated
   */
  userPreferred: string | null;
}

export interface media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.
   */
  extraLarge: string | null;
  /**
   * The cover image url of the media at a large size
   */
  large: string | null;
  /**
   * The cover image url of the media at medium size
   */
  medium: string | null;
  /**
   * Average #hex color of cover image
   */
  color: string | null;
}

export interface media_startDate {
  __typename: "FuzzyDate";
  /**
   * Numeric Year (2017)
   */
  year: number | null;
  /**
   * Numeric Month (3)
   */
  month: number | null;
  /**
   * Numeric Day (24)
   */
  day: number | null;
}

export interface media_endDate {
  __typename: "FuzzyDate";
  /**
   * Numeric Year (2017)
   */
  year: number | null;
  /**
   * Numeric Month (3)
   */
  month: number | null;
  /**
   * Numeric Day (24)
   */
  day: number | null;
}

export interface media_mediaListEntry {
  __typename: "MediaList";
  /**
   * The id of the list entry
   */
  id: number;
  /**
   * The watching/reading status
   */
  status: MediaListStatus | null;
}

export interface media_nextAiringEpisode {
  __typename: "AiringSchedule";
  /**
   * The time the episode airs at
   */
  airingAt: number;
  /**
   * Seconds until episode starts airing
   */
  timeUntilAiring: number;
  /**
   * The airing episode number
   */
  episode: number;
}

export interface media_studios_edges_node {
  __typename: "Studio";
  /**
   * The id of the studio
   */
  id: number;
  /**
   * The name of the studio
   */
  name: string;
}

export interface media_studios_edges {
  __typename: "StudioEdge";
  /**
   * If the studio is the main animation studio of the anime
   */
  isMain: boolean;
  node: media_studios_edges_node | null;
}

export interface media_studios {
  __typename: "StudioConnection";
  edges: (media_studios_edges | null)[] | null;
}

export interface media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: media_title | null;
  /**
   * The cover images of the media
   */
  coverImage: media_coverImage | null;
  /**
   * The first official release date of the media
   */
  startDate: media_startDate | null;
  /**
   * The last official release date of the media
   */
  endDate: media_endDate | null;
  /**
   * The banner image of the media
   */
  bannerImage: string | null;
  /**
   * The season the media was initially released in
   */
  season: MediaSeason | null;
  /**
   * The season year the media was initially released in
   */
  seasonYear: number | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The type of the media; anime or manga
   */
  type: MediaType | null;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * The amount of episodes the anime has when complete
   */
  episodes: number | null;
  /**
   * The general length of each anime episode in minutes
   */
  duration: number | null;
  /**
   * The amount of chapters the manga has when complete
   */
  chapters: number | null;
  /**
   * The amount of volumes the manga has when complete
   */
  volumes: number | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
  /**
   * If the media is intended only for 18+ adult audiences
   */
  isAdult: boolean | null;
  /**
   * A weighted average score of all the user's scores of the media
   */
  averageScore: number | null;
  /**
   * The number of users with the media on their list
   */
  popularity: number | null;
  /**
   * The authenticated user's media list entry for the media
   */
  mediaListEntry: media_mediaListEntry | null;
  /**
   * The media's next episode airing schedule
   */
  nextAiringEpisode: media_nextAiringEpisode | null;
  /**
   * The companies who produced the media
   */
  studios: media_studios | null;
}
