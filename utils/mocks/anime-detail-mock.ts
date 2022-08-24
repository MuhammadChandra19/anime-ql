import { MockedResponse } from '@apollo/client/testing';
import { QUERY_MEDIA_DETAIL } from '../../src/graphql/animeDetail/queries.graphql';

export const mockAnimeDetailResponse: readonly MockedResponse<Record<string, any>>[] = [
  { 
    request: {
      query: QUERY_MEDIA_DETAIL,
      variables: { id: 1 }
    },
    result: {
      data: {
        "Media": {
          "id": 1,
          "title": {
            "romaji": "Cowboy Bebop",
            "english": "Cowboy Bebop",
            "native": "カウボーイビバップ",
            "userPreferred": "Cowboy Bebop"
          },
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg",
          "description": "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
          "coverImage": {
            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
            "color": "#f1785d"
          },
          "status": "FINISHED",
          "season": "SPRING",
          "seasonYear": 1998,
          "studios": {
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
                  "id": 23,
                  "name": "Bandai Visual",
                  "isAnimationStudio": false,
                  "siteUrl": "https://anilist.co/studio/23"
                },
                "isMain": false
              },
              {
                "node": {
                  "id": 233,
                  "name": "Bandai Entertainment",
                  "isAnimationStudio": false,
                  "siteUrl": "https://anilist.co/studio/233"
                },
                "isMain": false
              }
            ]
          },
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "meanScore": 86,
          "episodes": 26,
          "duration": 24,
          "volumes": null,
          "format": "TV",
          "reviews": {
            "edges": [
              {
                "node": {
                  "id": 760,
                  "summary": "Cowboy Bebop is a smash-hit jam session",
                  "score": 100,
                  "user": {
                    "id": 22003,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/22003-pluP89UXFOYq.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/22003-pluP89UXFOYq.png"
                    }
                  },
                  "rating": 36
                }
              },
              {
                "node": {
                  "id": 2242,
                  "summary": "Review of Cowboy Bebop",
                  "score": 100,
                  "user": {
                    "id": 98098,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/98098-OHfrX9d7wIVQ.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/98098-OHfrX9d7wIVQ.jpg"
                    }
                  },
                  "rating": 202
                }
              },
              {
                "node": {
                  "id": 3398,
                  "summary": "Okay, 3, 2, 1 let's jam",
                  "score": 100,
                  "user": {
                    "id": 173334,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b173334-U6tLWQoaepDP.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b173334-U6tLWQoaepDP.png"
                    }
                  },
                  "rating": 30
                }
              },
              {
                "node": {
                  "id": 4534,
                  "summary": "A Story of Facing Your Fate Told via Flawed Characters, Episodic Segments, & Brilliant Musical Composition",
                  "score": 100,
                  "user": {
                    "id": 279478,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b279478-T6chZ4ffDKuD.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b279478-T6chZ4ffDKuD.jpg"
                    }
                  },
                  "rating": 16
                }
              },
              {
                "node": {
                  "id": 5467,
                  "summary": "A story where you feel like you really get to know the characters",
                  "score": 95,
                  "user": {
                    "id": 359721,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b359721-QjtVv6jjYQyR.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b359721-QjtVv6jjYQyR.jpg"
                    }
                  },
                  "rating": 10
                }
              },
              {
                "node": {
                  "id": 6487,
                  "summary": "96/100 – From characterization to animation, Cowboy Bebop does everything right. It is truly a classic to behold.",
                  "score": 96,
                  "user": {
                    "id": 471724,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b471724-jUJOeUpauorg.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b471724-jUJOeUpauorg.png"
                    }
                  },
                  "rating": 20
                }
              },
              {
                "node": {
                  "id": 7245,
                  "summary": "Top 5 reasons Cowboy Bebop is a 10/10",
                  "score": 100,
                  "user": {
                    "id": 589910,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b589910-npRffmG8zw2E.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b589910-npRffmG8zw2E.jpg"
                    }
                  },
                  "rating": 14
                }
              },
              {
                "node": {
                  "id": 7295,
                  "summary": "Controversial opinion incoming ",
                  "score": 70,
                  "user": {
                    "id": 410834,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b410834-x3GEtsOKdAo1.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b410834-x3GEtsOKdAo1.jpg"
                    }
                  },
                  "rating": 196
                }
              },
              {
                "node": {
                  "id": 8023,
                  "summary": "This show focuses more on the journey then on any kind of \"plot\" with our character.",
                  "score": 80,
                  "user": {
                    "id": 253943,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b253943-PLMRQJzDZaQA.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b253943-PLMRQJzDZaQA.jpg"
                    }
                  },
                  "rating": 11
                }
              },
              {
                "node": {
                  "id": 8167,
                  "summary": "If Cowboy Bebop was a person it would be quite an arrogant guy, like me in this review.",
                  "score": 76,
                  "user": {
                    "id": 680631,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b680631-dO0wgfXhSMiV.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b680631-dO0wgfXhSMiV.png"
                    }
                  },
                  "rating": 18
                }
              },
              {
                "node": {
                  "id": 10210,
                  "summary": "\"i don’t like space, and i don’t like cowboys so why the fuck would i like space cowboys?\" and then it creeped up on me",
                  "score": 93,
                  "user": {
                    "id": 5196779,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5196779-5RwEEx8FhVrV.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5196779-5RwEEx8FhVrV.png"
                    }
                  },
                  "rating": 35
                }
              },
              {
                "node": {
                  "id": 11018,
                  "summary": "“Why don’t we drink to me and my reflection in your lovely eyes?” – Andy Von De Oniyate",
                  "score": 96,
                  "user": {
                    "id": 5239887,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5239887-dNSETQ0Yf3Vn.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5239887-dNSETQ0Yf3Vn.png"
                    }
                  },
                  "rating": 24
                }
              },
              {
                "node": {
                  "id": 11354,
                  "summary": "A story from the past that teaches us to look to the future",
                  "score": 100,
                  "user": {
                    "id": 883323,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b883323-qLr1bYr6GGhv.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b883323-qLr1bYr6GGhv.png"
                    }
                  },
                  "rating": 36
                }
              },
              {
                "node": {
                  "id": 13067,
                  "summary": "Cowboy Bebop was a bet.",
                  "score": 100,
                  "user": {
                    "id": 211063,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b211063-MCXRsfMS6chC.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b211063-MCXRsfMS6chC.png"
                    }
                  },
                  "rating": 76
                }
              },
              {
                "node": {
                  "id": 13163,
                  "summary": "\"The work which will become a genre itself will be called COWBOY BEBOP.\"",
                  "score": 90,
                  "user": {
                    "id": 5325636,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5325636-mPrwSh6ixNFc.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5325636-mPrwSh6ixNFc.jpg"
                    }
                  },
                  "rating": 55
                }
              },
              {
                "node": {
                  "id": 14601,
                  "summary": "Cowboy Bebop remains as one of the undefeated peaks of anime. Nealy perfect on every metric.",
                  "score": 100,
                  "user": {
                    "id": 5678309,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5678309-VjhFtsBqx2zX.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5678309-VjhFtsBqx2zX.jpg"
                    }
                  },
                  "rating": 26
                }
              },
              {
                "node": {
                  "id": 14693,
                  "summary": "An excellent beginner anime show, but controversial opinions will be mentioned. ",
                  "score": 60,
                  "user": {
                    "id": 851292,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/default.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/default.png"
                    }
                  },
                  "rating": 22
                }
              },
              {
                "node": {
                  "id": 16522,
                  "summary": "See you Space Cowboy....",
                  "score": 69,
                  "user": {
                    "id": 5812180,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5812180-Y870nOwgd9mx.jpg",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5812180-Y870nOwgd9mx.jpg"
                    }
                  },
                  "rating": 17
                }
              },
              {
                "node": {
                  "id": 16690,
                  "summary": "The first ever Anime I completed. Knowing what Anime ACTUALLY is.",
                  "score": 93,
                  "user": {
                    "id": 508744,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b508744-PiAsOgSwmjMB.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b508744-PiAsOgSwmjMB.png"
                    }
                  },
                  "rating": 23
                }
              },
              {
                "node": {
                  "id": 16691,
                  "summary": "Space western epic that entertains and enlightens the viewer.",
                  "score": 89,
                  "user": {
                    "id": 169913,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b169913-0MHSEuRni4uX.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b169913-0MHSEuRni4uX.png"
                    }
                  },
                  "rating": 9
                }
              },
              {
                "node": {
                  "id": 17166,
                  "summary": "A spoiler free review of Watanabe's classic: Cowboy Bebop",
                  "score": 89,
                  "user": {
                    "id": 5678442,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5678442-z3Bt8GxHd8FL.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5678442-z3Bt8GxHd8FL.png"
                    }
                  },
                  "rating": 26
                }
              },
              {
                "node": {
                  "id": 17640,
                  "summary": "A famous anime that is too short yet really good",
                  "score": 88,
                  "user": {
                    "id": 5909548,
                    "avatar": {
                      "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5909548-aj1eMmXb25tt.png",
                      "medium": "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5909548-aj1eMmXb25tt.png"
                    }
                  },
                  "rating": 23
                }
              }
            ]
          }
        }
      }
    }
  },
]