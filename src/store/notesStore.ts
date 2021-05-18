import { action, makeObservable, observable, runInAction } from 'mobx'
import { Note } from 'models'
import { NotesService } from 'services'

class ApodStore {
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
    })
  }

  setLoading = (loading: boolean): void => {
    this.loading = loading
  }

  setUrlToShare = (url: string): void => {
    this.urlToShare = url
  }

  postNote = async (note: Note) => {
    this.setLoading(true)
    try {
      const data = await this.notesService.postNote(note)
      // this.setUrlToShare(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export { ApodStore }
