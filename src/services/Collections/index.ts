import { AnimeDetail_Media } from '../../graphql/animeDetail/__generated__/AnimeDetail'

export type CollectionList = {
  [key: string]: AnimeDetail_Media[]
}

export type AnimeCollectionList = {
  [key: string]: string[] 
}

export const addNewCollections = (name: string, anime: AnimeDetail_Media) => {
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
  return {}  
}

export const getCollectionByName = (name: string): AnimeDetail_Media[] => {
  return getCollections()[name]
}

const saveCollection = (collection: CollectionList) => {
  localStorage.setItem('collectionList', JSON.stringify(collection))
}

export const pushNewAnimeToCollection = (name: string, anime: AnimeDetail_Media) => {
  const savedCollections = getCollections() || {}
  const collections = { 
    ...savedCollections,  
    [name]: [
       ...(savedCollections[name] ? savedCollections[name] : []),
        anime 
      ] 
    }
  saveCollection(collections)
  saveAnimeCollectionList(anime.id.toString(), name)
}

export const updateCollectionName = (name: string, newName: string) => {
  const savedCollections = getCollections()
  const tempCollection = savedCollections[name]
  delete savedCollections[name]
  saveCollection({ ...saveCollection, [newName]: tempCollection })
}

export const getAnimeCollectionList = (): AnimeCollectionList => {
  const storageItem = localStorage.getItem('animeCollectionList')
  if(storageItem) {
    const collectionNames = JSON.parse(storageItem)
    return collectionNames 
  }
  return {}
}

export const getAnimeCollectionListById = (id: number): string[] => {
  return getAnimeCollectionList()[id.toString()]
}

export const saveAnimeCollectionList = (id: string, collectionName: string) => {
  const savedAnimeCollectionList = getAnimeCollectionList()
  const animeCollections = {
    ...savedAnimeCollectionList,
    [id]: [
      ...(savedAnimeCollectionList[id] ? savedAnimeCollectionList[id] : [] ),
      collectionName
    ]
  }
  localStorage.setItem('animeCollectionList', JSON.stringify(animeCollections))
}
