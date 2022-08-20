import { AnimeList_Page_media } from '../../graphql/animeList/__generated__/AnimeList'

export type CollectionList = {
  [key: string]: AnimeList_Page_media[]
}

export const addNewCollections = (name: string, anime: AnimeList_Page_media) => {
  const savedCollections = getCollections()
  const collections = { ...savedCollections,  [name]: [anime] }
  saveCollection(collections)
}

export const getCollections = (): CollectionList => {
  const storageItem = localStorage.getItem('collectionList')
  if(storageItem) {
    const savedCollections = JSON.parse(storageItem)
    return savedCollections as CollectionList;
  }
  return [] as unknown as CollectionList  
}

export const getCollectionByName = (name: string): AnimeList_Page_media[] => {
  return getCollections()[name]
}

const saveCollection = (collection: CollectionList) => {
  localStorage.setItem('collectionList', JSON.stringify(collection))
}

export const pushNewAnimeToCollection = (name: string, anime: AnimeList_Page_media) => {
  const savedCollections = getCollections()
  const collections = { ...savedCollections,  [name]: [ ...savedCollections[name], anime ] }
  saveCollection(collections)
}

export const updateCollectionName = (name: string, newName: string) => {
  const savedCollections = getCollections()
  const tempCollection = savedCollections[name]
  delete savedCollections[name]
  saveCollection({ ...saveCollection, [newName]: tempCollection })
}
