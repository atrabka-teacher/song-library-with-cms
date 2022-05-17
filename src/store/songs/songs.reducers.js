// TODO

const addSong = (state, { payload }) => {
  state.songs = [...state.songs, payload.song];
  return state;
};

const reducers = { addSong };

export default reducers;
