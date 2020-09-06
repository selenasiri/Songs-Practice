import { combineReducers } from 'redux'
import songsReducer from './songsReducer'
import selectedSongReducer from './selectedSongReducer'

const rootReducer = combineReducers({
  selectedSong: selectedSongReducer,
  songs: songsReducer,
})

export default rootReducer
