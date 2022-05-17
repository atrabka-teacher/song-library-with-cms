const addFavouriteGenre = (state, { payload }) => {
  state.favouriteGenres = [...state.favouriteGenres, payload.genre];
};

const removeFavouriteGenre = (state, { payload }) => {
  state.favouriteGenres = state.favouriteGenres.filter(
    (genre) => genre !== payload.genre
  );
};

const reducers = {
  addFavouriteGenre,
  removeFavouriteGenre,
};

export default reducers;
