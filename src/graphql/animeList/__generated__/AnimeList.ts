/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus, MediaSeason, MediaFormat } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: AnimeList
// ====================================================

export interface AnimeList_Page_pageInfo {
  __typename: "PageInfo";
  /**
   * The current page
   */
  currentPage: number | null;
  /**
   * If there is another page
   */
  hasNextPage: boolean | null;
}

export interface AnimeList_Page_media_title {
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
  /**
   * The currently authenticated users preferred title language. Default romaji for non-authenticated
   */
  userPreferred: string | null;
}

export interface AnimeList_Page_media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.
   */
  extraLarge: string | null;
  /**
   * Average #hex color of cover image
   */
  color: string | null;
}

export interface AnimeList_Page_media_studios_nodes {
  __typename: "Studio";
  /**
   * The id of the studio
   */
  id: number;
}

export interface AnimeList_Page_media_studios_edges_node {
  __typename: "Studio";
  /**
   * The id of the studio
   */
  id: number;
  /**
   * The name of the studio
   */
  name: string;
  /**
   * If the studio is an animation studio or a different kind of company
   */
  isAnimationStudio: boolean;
  /**
   * The url for the studio page on the AniList website
   */
  siteUrl: string | null;
}

export interface AnimeList_Page_media_studios_edges {
  __typename: "StudioEdge";
  node: AnimeList_Page_media_studios_edges_node | null;
  /**
   * If the studio is the main animation studio of the anime
   */
  isMain: boolean;
}

export interface AnimeList_Page_media_studios {
  __typename: "StudioConnection";
  nodes: (AnimeList_Page_media_studios_nodes | null)[] | null;
  edges: (AnimeList_Page_media_studios_edges | null)[] | null;
}

export interface AnimeList_Page_media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: AnimeList_Page_media_title | null;
  /**
   * The cover images of the media
   */
  coverImage: AnimeList_Page_media_coverImage | null;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * The season the media was initially released in
   */
  season: MediaSeason | null;
  /**
   * The season year the media was initially released in
   */
  seasonYear: number | null;
  /**
   * The companies who produced the media
   */
  studios: AnimeList_Page_media_studios | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
  /**
   * Mean score of all the user's scores of the media
   */
  meanScore: number | null;
  /**
   * The amount of episodes the anime has when complete
   */
  episodes: number | null;
  /**
   * The general length of each anime episode in minutes
   */
  duration: number | null;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
}

export interface AnimeList_Page {
  __typename: "Page";
  /**
   * The pagination information
   */
  pageInfo: AnimeList_Page_pageInfo | null;
  media: (AnimeList_Page_media | null)[] | null;
}

export interface AnimeList {
  Page: AnimeList_Page | null;
}

export interface AnimeListVariables {
  page?: number | null;
  perPage?: number | null;
}
