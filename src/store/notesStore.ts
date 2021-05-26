import { action, makeObservable, observable, runInAction } from 'mobx'
import { Note } from 'models'
import { NotesService } from 'services'

class NotesStore {
  notesService: NotesService
  note: Note | null = null
  loading = false
  urlToShare = ''
  error: null | string = null

  constructor() {
    this.notesService = new NotesService()

    makeObservable(this, {
      note: observable,
      loading: observable,
      urlToShare: observable,
      setNote: action,
      setLoading: action,
      setUrlToShare: action,
      setError: action,
      postNote: action,
    })
  }

  setNote = (note: Note | null): void => {
    this.note = note
  }

  setLoading = (loading: boolean): void => {
    this.loading = loading
  }

  setError = (error: string | null): void => {
    this.error = error
  }

  setUrlToShare = (url: string): void => {
    this.urlToShare = window.location.href + 'note/' + url
  }

  postNote = async (note: Note) => {
    this.setUrlToShare('')
    this.setLoading(true)
    try {
      const { data } = await this.notesService.postNote(note)
      this.setUrlToShare(data.id)
    } catch (e) {
      if (e.response && e.response.data) this.setError(e.response.data.error)
    }
    this.setLoading(false)
  }

  getNote = async (id: string, password: string) => {
    this.setError(null)
    this.setLoading(true)
    try {
      const { data } = await this.notesService.getNote(id, password)
      this.setNote(data as Note)
    } catch (e) {
      if (e.response && e.response.data) this.setError(e.response.data.error)
    }
    this.setLoading(false)
  }
}

export { NotesStore }
