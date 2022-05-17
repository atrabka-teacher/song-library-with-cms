import { createSlice } from "@reduxjs/toolkit";
import reducers from "./songs.reducers";

export const initialState = {
  songs: [],
};

export const songsSlice = createSlice({
  name: "songsState",
  initialState,
  reducers,
});

export default songsSlice.reducer;
