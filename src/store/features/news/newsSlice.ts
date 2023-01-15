import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { INews, News } from "../../../types/INews";

export const getNews = createAsyncThunk(
  "news/getNews",
  async (data, thunkApi) => {
    try {
      // const { data } = await axios.get<INews>("https://newsapi.org/v2/everything?q=manchester%20united&apiKey=c01546482c20436c9f7122c68e66d309");
      // return(data)
      const { data }: any = await axios.get("https://newsdata.io/api/1/news?apikey=pub_15671e0784fad9ec29ee898e4009880ec1e95&q=social");
      return data.results
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

interface NewsState {
  loading: boolean;
  error: null | string;
  data: null | INews;
  search: string;
  filteredNews: any;
  resultLength: number;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  search: '',
  filteredNews: null,
  resultLength: 0,
} as NewsState

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    getFilteredNews: (state, action: PayloadAction<News[]>) => {
      state.filteredNews = action.payload;
    },
    getResultLength: (state, action: PayloadAction<number>) => {
      state.resultLength = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
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
export const { getSearch, getFilteredNews, getResultLength } = newsSlice.actions;