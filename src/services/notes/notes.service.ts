import axios from 'axios'
import { Note } from 'models'
import { URL, PostNoteResponse, GetNoteResponse } from './notes.constants'

export class NotesService {
  instance = axios.create({ baseURL: URL })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postNote = async (note: Note): Promise<PostNoteResponse> => await this.instance.post('', note)
  getNote = async (id: string, password: string): Promise<GetNoteResponse> => await this.instance.post(id, { password })
}
