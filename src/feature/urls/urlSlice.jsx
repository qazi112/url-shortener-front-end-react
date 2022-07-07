import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
  name: "url-slice",
  initialState: {
    shortUrl: "",
    longUrl: "",
  },
  reducers: {
    setLongUrl: (state, action) => {
      state.longUrl = action.payload;
    },
    setShortUrl: (state, action) => {
      state.shortUrl = action.payload;
    },
  },
});

export const { setLongUrl, setShortUrl } = urlSlice.actions;
export default urlSlice.reducer;
