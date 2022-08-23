export const getStorageItems = <T>(storageName: string): T => {
  const storageItem = localStorage.getItem(storageName)
  if(storageItem) {
    const savedCollections = JSON.parse(storageItem)
    return savedCollections as T;
  }
  return null as unknown as T
}

export const setStorageItem = (name: string, item: any) => {
  localStorage.setItem(name, item)
} 
