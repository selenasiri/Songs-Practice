const initialState = null

//state is selectedSong
const selectedSongReducer = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload

    default:
      return state
  }
}

export default selectedSongReducer
