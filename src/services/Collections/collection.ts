import { getStorageItems, setStorageItem } from '../../../utils/storage'
import { AnimeDetail_Media } from '../../graphql/animeDetail/__generated__/AnimeDetail'

export type CollectionList = {
  [key: string]: AnimeDetail_Media[]
}

export type CollectionNames = {
  [key: string]: string
}


export const collection = () => {
  const getCollectionlist = () => {
    return getStorageItems<CollectionList>('collectionList') || {}
  }
  
  const getCollectionNames = () => {
    return getStorageItems<CollectionNames>('collectionNames') || {}
  }
  
  const createNewCollection = (name: string, collectionId: string) => {
    // const collectionId = new Date().getTime()
    const savedCollectionList = getCollectionlist()
    const savedCollectionNames = getCollectionNames()
  
    savedCollectionList[name] = []
    savedCollectionNames[collectionId] = name
  
    saveCollectionList(savedCollectionList)
    saveCollectionNames(savedCollectionNames)
  
  }
  
  const pushNewAnimeToCollection = (name: string, anime: AnimeDetail_Media) => {
    const savedCollections = getCollectionlist() || {}
  
    const collections = { 
      ...savedCollections,  
      [name]: [
         ...(savedCollections[name] ? savedCollections[name] : []),
          anime 
        ] 
      }
    
    saveCollectionList(collections)
  }
  
  const updateCollectionName = (name: string, newName: string) => {
    const savedCollectionList = getCollectionlist()
    const savedCollectionNames = getCollectionNames()
  
    const tempCollection = savedCollectionList[name]
    delete savedCollectionList[name]
  
    const collectionKey = getCollectionNameKey(name)
    if(collectionKey) {
      savedCollectionNames[collectionKey] = newName
    }
  
    saveCollectionNames(savedCollectionNames)
    saveCollectionList({ ...savedCollectionList, [newName]: tempCollection })
  }
  
  const removeCollection = (name: string) => {
    const savedCollections = getCollectionlist()
    const savedCollectionNames = getCollectionNames()
  
    delete savedCollections[name]
    const collectionKey = getCollectionNameKey(name)
    
    if(collectionKey) {
      delete savedCollectionNames[collectionKey]
    }
  
    saveCollectionList(savedCollections)
    saveCollectionNames(savedCollectionNames)
  } 
  
  const saveCollectionList = (collection: CollectionList) => {
    setStorageItem('collectionList', JSON.stringify(collection))
  }
  
  const saveCollectionNames = (collectionNames: CollectionNames) => {
    setStorageItem('collectionNames', JSON.stringify(collectionNames))
  }
  
  const getCollectionNameKey = (name: string) => {
    const savedCollectionNames = getCollectionNames()
    return Object.keys(savedCollectionNames).find(key => savedCollectionNames[key] === name )
  }

  return {
    removeCollection,
    updateCollectionName,
    pushNewAnimeToCollection,
    createNewCollection,
    getCollectionlist,
    getCollectionNameKey,
    getCollectionNames
  }
}




