import { useContext } from 'react'
import { StoreContext } from './store'
import { IStore } from './store'

export const useDataStore = (): IStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
