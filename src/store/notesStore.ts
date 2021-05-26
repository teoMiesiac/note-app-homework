import { action, makeObservable, observable, runInAction } from 'mobx'
import { Note } from 'models'
import { NotesService } from 'services'

class NotesStore {
  notesService: NotesService

  loading = false
  urlToShare = ''

  constructor() {
    this.notesService = new NotesService()

    makeObservable(this, {
      loading: observable,
      urlToShare: observable,
      setLoading: action,
      postNote: action,
      resetUrlToShare: action,
    })
  }

  setLoading = (loading: boolean): void => {
    this.loading = loading
  }

  setUrlToShare = (url: string): void => {
    this.urlToShare = window.location.href + url
  }

  resetUrlToShare = (): void => {
    this.urlToShare = ''
  }

  postNote = async (note: Note) => {
    this.resetUrlToShare()
    this.setLoading(true)
    try {
      const { data } = await this.notesService.postNote(note)
      this.setUrlToShare(data.id)
    } catch (e) {
      console.log(e)
    }
    this.setLoading(false)
  }
}

export { NotesStore }
