import { songsSlice } from "./index";

export const setSongsAction = (payload) => songsSlice.actions.setSongs(payload);

export const addSongAction = (payload) => songsSlice.actions.addSong(payload);
