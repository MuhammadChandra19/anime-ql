import { getStorageItems, setStorageItem } from '../../../utils/storage'

export type AnimeStorageItem = {
  collectionIds: {
    [key: string]: boolean
  }
}
export type AnimeStorageList = {
  [key: string]: AnimeStorageItem
}

export const animeStorage = () => {
  const getAnimeStorageList = (): AnimeStorageList => {
    return getStorageItems<AnimeStorageList>('animeStorage') || {}
  }
  
  const saveAnimeStorageList = (animeStorageList: AnimeStorageList) => {
    setStorageItem('animeStorage',  JSON.stringify(animeStorageList))
  }
  
  const getAnimeStorage = (name: string): Partial<AnimeStorageItem> => {
    const animeStorage = getAnimeStorageList()
    if(animeStorage) {
      return animeStorage[name]
    } 
    return {}
  }
  
  const addCollectionIdToAnimeStorage = (animeId: string, collectionId: string) => {
    const savedAnimeStorageList = getAnimeStorageList()
    const animeStorageList: AnimeStorageList = {
      ...savedAnimeStorageList,
      [animeId]: {
        ...savedAnimeStorageList[animeId],
        collectionIds: { 
          ...( savedAnimeStorageList[animeId]?.collectionIds ? savedAnimeStorageList[animeId].collectionIds : {}), 
          [collectionId]: true
        }
      }
    }
    saveAnimeStorageList(animeStorageList)
  }
  
  const deleteCollectionFromAnimeStorage = (collectionId: string) => {
    const savedAnimeStorageList = getAnimeStorageList()
    const tempStorage = savedAnimeStorageList
    Object.keys(savedAnimeStorageList).forEach(key => {
      const animeStorage = savedAnimeStorageList[key]
      if(animeStorage.collectionIds[collectionId]) {
        delete tempStorage[key].collectionIds[collectionId]
      }
    })
    saveAnimeStorageList(tempStorage)
  }
  return {
    deleteCollectionFromAnimeStorage,
    addCollectionIdToAnimeStorage,
    getAnimeStorage
  }
}


