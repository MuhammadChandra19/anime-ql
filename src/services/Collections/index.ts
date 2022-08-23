import { AnimeDetail_Media } from '../../graphql/animeDetail/__generated__/AnimeDetail'
import { animeStorage } from './animeStorage'
import { collection } from './collection'

const { 
  createNewCollection, 
  getCollectionNameKey,
  getCollectionlist, 
  removeCollection, 
  pushNewAnimeToCollection, 
  updateCollectionName,
  getCollectionNames
} = collection()
const {
  addCollectionIdToAnimeStorage,
  deleteCollectionFromAnimeStorage,
  getAnimeStorage
} = animeStorage()

const createCollection = (name: string) => {
  const collectionId = new Date().getTime()
  createNewCollection(name, collectionId.toString())
}

const addAnimeToCollection = (name: string, anime: AnimeDetail_Media) => {
  pushNewAnimeToCollection(name, anime)
  const key = getCollectionNameKey(name)
  if(key) {
    addCollectionIdToAnimeStorage(anime.id.toString(), key)
  }
}

const deleteCollection = (collectionName: string) => {
  const key = getCollectionNameKey(collectionName)
  console.log(key)
  if(key) {
    deleteCollectionFromAnimeStorage(key)
  }
  removeCollection(collectionName)
  
}

export {
  addAnimeToCollection,
  createCollection,
  updateCollectionName,
  getCollectionlist,
  deleteCollection,
  getAnimeStorage,
  getCollectionNames
}
