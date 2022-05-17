import { getSongs } from "../songs/songs.selectors";

export const getFavouriteGenres = (state) => {
  const favouriteGenres = state.userState.favouriteGenres;
  return favouriteGenres;
};

export const getRecommendedSongs = (state) => {
  const songs = getSongs(state);
  const favouriteGenres = getFavouriteGenres(state);

  const recommendedSongs = songs
    .filter((song) => favouriteGenres.includes(song.genre))
    .slice(0, 3);

  return recommendedSongs;
};
