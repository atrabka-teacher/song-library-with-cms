const setSongs = (state, { payload }) => {
  state.songs = [...payload.songs];
  return state;
};

const addSong = (state, { payload }) => {
  state.songs = [...state.songs, payload.song];
  return state;
};

const reducers = { setSongs, addSong };

export default reducers;
