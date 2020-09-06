const initialState = [
  { title: 'No Scrubs', duration: '4:05' },
  { title: 'Macarena', duration: '2:30' },
  { title: 'All Star', duration: '3:15' },
  { title: 'I Want it That Way', duration: '1:45' },
]

const songsReducer = (state = initialState, action) => {
  //only when the initial state is undefined, javascript will assign the default value
  console.log(action)

  switch (action.type) {
    default:
      return state
  }
}

export default songsReducer

//it is known that the initialState is undefined the first time it's called
// a reducer cannot return undefined
// so we have it return the new state
