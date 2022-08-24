import { MockedResponse } from '@apollo/client/testing';
import { QUERY_MEDIA_LIST } from '../../src/graphql/animeList/queries.graphql';

export const mockAnimeListResponse: readonly MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: QUERY_MEDIA_LIST,
      variables: { page: 1, perPage: 18 }
    },
    result: {
      data: {
        "Page": {
          "pageInfo": {
            "currentPage": 1,
            "hasNextPage": true
          },
          "media": [
            {
              "id": 141902,
              "title": {
                "romaji": "ONE PIECE FILM: RED",
                "english": "One Piece Film: Red",
                "native": "ONE PIECE FILM RED",
                "userPreferred": "ONE PIECE FILM: RED"
              },
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141902-fTyoTk8F8qOl.jpg",
                "color": "#f1c950"
              },
              "status": "FINISHED",
              "season": "SUMMER",
              "seasonYear": 2022,
              "studios": {
                "nodes": [
                  {
                    "id": 18
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": 18,
                      "name": "Toei Animation",
                      "isAnimationStudio": true,
                      "siteUrl": "https://anilist.co/studio/18"
                    },
                    "isMain": true
                  }
                ]
              },
              "genres": [
                "Action",
                "Adventure",
                "Comedy"
              ],
              "meanScore": 83,
              "episodes": 1,
              "duration": 115,
              "format": "MOVIE"
            },
            {
              "id": 152962,
              "title": {
                "romaji": "I’m Your Treasure Box＊Anata wa Marine Senchou Otakara Bako kara Mitsuketa.",
                "english": "I'm Your Treasure Box * You have found captain Marine in a treasure chest",
                "native": "I’m Your Treasure Box ＊あなたは マリンせんちょうを たからばこからみつけた。",
                "userPreferred": "I’m Your Treasure Box＊Anata wa Marine Senchou Otakara Bako kara Mitsuketa."
              },
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx152962-KYwxKib6GRxi.png",
                "color": "#ae3550"
              },
              "status": "FINISHED",
              "season": null,
              "seasonYear": null,
              "studios": {
                "nodes": [],
                "edges": []
              },
              "genres": [
                "Ecchi"
              ],
              "meanScore": 83,
              "episodes": 1,
              "duration": 4,
              "format": "MUSIC"
            },
            {
              "id": 143082,
              "title": {
                "romaji": "Sasaki to Miyano: Koi ni Kizuku Mae no Chottoshita Hanashi.",
                "english": "Sasaki and Miyano: A Tiny Episode From Before He Realized His Feelings",
                "native": "佐々木と宮野 恋に気づく前のちょっとした話。",
                "userPreferred": "Sasaki to Miyano: Koi ni Kizuku Mae no Chottoshita Hanashi."
              },
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143082-PZbVN1kR0UYt.png",
                "color": "#e4a15d"
              },
              "status": "FINISHED",
              "season": "SUMMER",
              "seasonYear": 2022,
              "studios": {
                "nodes": [
                  {
                    "id": 6698
                  },
                  {
                    "id": 37
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": 6698,
                      "name": "KADOKAWA",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/6698"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 37,
                      "name": "Studio DEEN",
                      "isAnimationStudio": true,
                      "siteUrl": "https://anilist.co/studio/37"
                    },
                    "isMain": true
                  }
                ]
              },
              "genres": [
                "Comedy",
                "Romance",
                "Slice of Life"
              ],
              "meanScore": 78,
              "episodes": 1,
              "duration": 23,
              "format": "OVA"
            },
            {
              "id": 129196,
              "title": {
                "romaji": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou Meikyuu-hen",
                "english": "Is It Wrong to Try to Pick Up Girls in a Dungeon? IV",
                "native": "ダンジョンに出会いを求めるのは間違っているだろうかⅣ 新章 迷宮篇",
                "userPreferred": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou Meikyuu-hen"
              },
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129196-eARf1qEerqIm.jpg",
                "color": "#3593f1"
              },
              "status": "RELEASING",
              "season": "SUMMER",
              "seasonYear": 2022,
              "studios": {
                "nodes": [
                  {
                    "id": 415
                  },
                  {
                    "id": 7
                  },
                  {
                    "id": 777
                  },
                  {
                    "id": 6562
                  },
                  {
                    "id": 460
                  },
                  {
                    "id": 166
                  },
                  {
                    "id": 6612
                  },
                  {
                    "id": 7237
                  },
                  {
                    "id": 6127
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": 415,
                      "name": "Warner Bros. Japan",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/415"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 7,
                      "name": "J.C. Staff",
                      "isAnimationStudio": true,
                      "siteUrl": "https://anilist.co/studio/7"
                    },
                    "isMain": true
                  },
                  {
                    "node": {
                      "id": 777,
                      "name": "Hakuhodo DY Music & Pictures",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/777"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 6562,
                      "name": "SB Creative",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/6562"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 460,
                      "name": "Klock Worx",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/460"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 166,
                      "name": "Movic",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/166"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 6612,
                      "name": "FuRyu",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/6612"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 7237,
                      "name": "GREE Entertainment",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/7237"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 6127,
                      "name": "EGG FIRM",
                      "isAnimationStudio": true,
                      "siteUrl": "https://anilist.co/studio/6127"
                    },
                    "isMain": false
                  }
                ]
              },
              "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Fantasy",
                "Romance"
              ],
              "meanScore": 77,
              "episodes": null,
              "duration": 24,
              "format": "TV"
            },
            {
              "id": 140642,
              "title": {
                "romaji": "Love Live! Superstar!! 2",
                "english": "Love Live! Superstar!! Season 2",
                "native": "ラブライブ!スーパースター!!２",
                "userPreferred": "Love Live! Superstar!! 2"
              },
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140642-uENjMoTQqPoO.jpg",
                "color": "#43aeff"
              },
              "status": "RELEASING",
              "season": "SUMMER",
              "seasonYear": 2022,
              "studios": {
                "nodes": [
                  {
                    "id": 14
                  },
                  {
                    "id": 7137
                  },
                  {
                    "id": 7138
                  },
                  {
                    "id": 6698
                  },
                  {
                    "id": 775
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": 14,
                      "name": "Sunrise",
                      "isAnimationStudio": true,
                      "siteUrl": "https://anilist.co/studio/14"
                    },
                    "isMain": true
                  },
                  {
                    "node": {
                      "id": 7137,
                      "name": "Bandai Namco Filmworks",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/7137"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 7138,
                      "name": "Bandai Namco Music Live",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/7138"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 6698,
                      "name": "KADOKAWA",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/6698"
                    },
                    "isMain": false
                  },
                  {
                    "node": {
                      "id": 775,
                      "name": "Bushiroad",
                      "isAnimationStudio": false,
                      "siteUrl": "https://anilist.co/studio/775"
                    },
                    "isMain": false
                  }
                ]
              },
              "genres": [
                "Music",
                "Slice of Life"
              ],
              "meanScore": 80,
              "episodes": 12,
              "duration": 24,
              "format": "TV"
            }
          ]
        }
      }
    }
  }
]