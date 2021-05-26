import { action, makeObservable, observable, runInAction } from 'mobx'
import { Note } from 'models'
import { NotesService } from 'services'

class NotesStore {
  notesService: NotesService
  note: Note | null = null
  loading = false
  urlToShare: string | null = null
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

  setUrlToShare = (url: string | null): void => {
    url ? (this.urlToShare = window.location.href + 'note/' + url) : (this.urlToShare = null)
  }

  postNote = async (note: Note) => {
    this.setUrlToShare(null)
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
