/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus, MediaFormat, MediaSeason, MediaType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: AnimeDetail
// ====================================================

export interface AnimeDetail_Media_title {
  __typename: "MediaTitle";
  /**
   * The romanization of the native language title
   */
  romaji: string | null;
  /**
   * The official english title
   */
  english: string | null;
  /**
   * Official title in it's native language
   */
  native: string | null;
}

export interface AnimeDetail_Media_startDate {
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

export interface AnimeDetail_Media_endDate {
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

export interface AnimeDetail_Media_coverImage {
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

export interface AnimeDetail_Media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: AnimeDetail_Media_title | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
  /**
   * The first official release date of the media
   */
  startDate: AnimeDetail_Media_startDate | null;
  /**
   * The last official release date of the media
   */
  endDate: AnimeDetail_Media_endDate | null;
  /**
   * The season the media was initially released in
   */
  season: MediaSeason | null;
  /**
   * The season year the media was initially released in
   */
  seasonYear: number | null;
  /**
   * The banner image of the media
   */
  bannerImage: string | null;
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
   * The type of the media; anime or manga
   */
  type: MediaType | null;
  /**
   * The cover images of the media
   */
  coverImage: AnimeDetail_Media_coverImage | null;
  /**
   * A weighted average score of all the user's scores of the media
   */
  averageScore: number | null;
}

export interface AnimeDetail {
  /**
   * Media query
   */
  Media: AnimeDetail_Media | null;
}

export interface AnimeDetailVariables {
  id?: number | null;
}
