import React from 'react'
import { useAnimeListQuery } from '../../../generated/graphql'

const MediaList:React.FC = () => {
  const { data, loading, error } = useAnimeListQuery({variables: {page: 1, perPage: 30}})

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }
  return (
    <div>{ JSON.stringify(data) }</div>
  )
}

export default MediaList