import React, { createContext } from 'react'
import { NotesStore } from './notesStore'

export interface IStore {
  NotesStore: NotesStore
}

export const store: IStore = {
  NotesStore: new NotesStore(),
}

export const StoreContext = createContext(store)

interface Props {
  children: React.ReactNode
}

export const DataStoreProvider = ({ children }: Props): JSX.Element => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
