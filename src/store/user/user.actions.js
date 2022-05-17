import { userSlice } from "./index";

export const addFavouriteGenreAction = (payload) =>
  userSlice.actions.addFavouriteGenre(payload);

export const removeFavouriteGenreAction = (payload) =>
  userSlice.actions.removeFavouriteGenre(payload);
