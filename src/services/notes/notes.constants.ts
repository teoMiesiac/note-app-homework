export const URL = 'https://europe-central2-note-app-314122.cloudfunctions.net/note'

interface PostNoteData {
  id: string
}
export interface PostNoteResponse {
  data: PostNoteData
}

interface GetNoteData {
  text: string
}
export interface GetNoteResponse {
  data: GetNoteData
}
