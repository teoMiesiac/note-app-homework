import axios from 'axios'
import { Note } from 'models'
import { URL } from './notes.constants'

export class NotesService {
  instance = axios.create({ baseURL: URL })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postNote = async (note: Note): Promise<any> => await this.instance.post('', note)
}
