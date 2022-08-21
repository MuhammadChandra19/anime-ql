/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus, MediaSeason, MediaFormat } from "./../../../../__generated__/globalTypes";

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
  /**
   * The currently authenticated users preferred title language. Default romaji for non-authenticated
   */
  userPreferred: string | null;
}

export interface AnimeDetail_Media_coverImage {
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

export interface AnimeDetail_Media_studios_edges_node {
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

export interface AnimeDetail_Media_studios_edges {
  __typename: "StudioEdge";
  node: AnimeDetail_Media_studios_edges_node | null;
  /**
   * If the studio is the main animation studio of the anime
   */
  isMain: boolean;
}

export interface AnimeDetail_Media_studios {
  __typename: "StudioConnection";
  edges: (AnimeDetail_Media_studios_edges | null)[] | null;
}

export interface AnimeDetail_Media_reviews_edges_node_user_avatar {
  __typename: "UserAvatar";
  /**
   * The avatar of user at its largest size
   */
  large: string | null;
  /**
   * The avatar of user at medium size
   */
  medium: string | null;
}

export interface AnimeDetail_Media_reviews_edges_node_user {
  __typename: "User";
  /**
   * The id of the user
   */
  id: number;
  /**
   * The user's avatar images
   */
  avatar: AnimeDetail_Media_reviews_edges_node_user_avatar | null;
}

export interface AnimeDetail_Media_reviews_edges_node {
  __typename: "Review";
  /**
   * The id of the review
   */
  id: number;
  /**
   * A short summary of the review
   */
  summary: string | null;
  /**
   * The review score of the media
   */
  score: number | null;
  /**
   * The creator of the review
   */
  user: AnimeDetail_Media_reviews_edges_node_user | null;
  /**
   * The total user rating of the review
   */
  rating: number | null;
}

export interface AnimeDetail_Media_reviews_edges {
  __typename: "ReviewEdge";
  node: AnimeDetail_Media_reviews_edges_node | null;
}

export interface AnimeDetail_Media_reviews {
  __typename: "ReviewConnection";
  edges: (AnimeDetail_Media_reviews_edges | null)[] | null;
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
   * The banner image of the media
   */
  bannerImage: string | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The cover images of the media
   */
  coverImage: AnimeDetail_Media_coverImage | null;
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
  studios: AnimeDetail_Media_studios | null;
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
   * The amount of volumes the manga has when complete
   */
  volumes: number | null;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
  /**
   * User reviews of the media
   */
  reviews: AnimeDetail_Media_reviews | null;
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
