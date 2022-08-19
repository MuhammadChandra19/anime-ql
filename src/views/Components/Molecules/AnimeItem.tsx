import React from 'react'
import { Media } from '../../../generated/graphql'
import { AnimeCard, AnimeCover } from '../../styles/AnimeStyles'

const AnimeItem: React.FC<{anime: Partial<Media>}> = ({ anime }) => {
  return (
    <AnimeCard>
      <AnimeCover>
        <img alt={anime.title?.english!} src={anime.coverImage?.extraLarge!} />
      </AnimeCover>
      <div>
        <div>{anime.title?.english}</div>
      </div>
    </AnimeCard>
  )
}

export default AnimeItem
