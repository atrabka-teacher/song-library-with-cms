import { createSlice } from "@reduxjs/toolkit";
import reducers from "./songs.reducers";

export const initialState = {
  songs: [
    {
      cover: "https://ecsmedia.pl/c/sleepless-remixes-w-iext70212510.jpg",
      author: "Flume",
      title: "Sleepless (Ninetys Remix)",
      bpm: 105,
      genre: "electronic",
    },
    {
      cover:
        "https://www.edmsauce.com/wp-content/uploads/2017/08/tchami_cover.jpg",
      author: "Tchami",
      title: "Adieu",
      bpm: 128,
      genre: "house",
    },
    {
      cover:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Kanye_West_-_Real_Friends_cover_art.jpg",
      author: "Kanye West",
      title: "Flashing Lights",
      bpm: 102,
      genre: "rap",
    },
    {
      cover: "https://i1.sndcdn.com/artworks-000192061377-uldk1u-t500x500.jpg",
      author: "Mercer",
      title: "Opium (VIP Mix)",
      bpm: 130,
      genre: "house",
    },
    {
      cover: "https://i.ytimg.com/vi/zWp2y_Ox1hs/maxresdefault.jpg",
      author: "PR0BL3M",
      title: "Adios",
      bpm: 102,
      genre: "rap",
    },
  ],
};

export const songsSlice = createSlice({
  name: "songsState",
  initialState,
  reducers,
});

export default songsSlice.reducer;
