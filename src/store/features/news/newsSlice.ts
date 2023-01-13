import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { INews } from "../../../types/INews";



export const getNews = createAsyncThunk(
  "news/getNews",
  async (data, thunkApi) => {
    try {
      const { data } = await axios.get<INews>("https://newsapi.org/v2/everything?q=manchester%20united&apiKey=c01546482c20436c9f7122c68e66d309");
      return data.articles;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

interface NewsState {
  loading: boolean;
  error: null | string;
  data: null | INews;
}

const initialState = {
  loading: false,
  error: null,
  data: null
} as NewsState

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getNews.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default newsSlice.reducer;