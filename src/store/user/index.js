import { createSlice } from "@reduxjs/toolkit";
import reducers from "./user.reducers";

export const initialState = {
  favouriteGenres: [],
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers,
});

export default userSlice.reducer;
