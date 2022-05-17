import { fetchFromCockpit } from "../../utils";
import { setSongsAction } from "./songs.actions";

export const listSongsOperation = (payload) => {
  return async (dispatch) => {
    const songsResBody = await fetchFromCockpit(
      "GET",
      "/collections/get/songs"
    );
    if (!songsResBody) return;
    const { entries: songs } = songsResBody;
    dispatch(setSongsAction({ songs }));
  };
};
