import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getJob = createAsyncThunk(
  "job/getJob",
  async (query, thunkAPI) => {
    try {
      const res = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + query
      );
      if (res.ok) {
        const data = await res.jason();
        return data;
      } else {
        thunkAPI.rejectWithValue();
      }
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState: {
    query: "",
    company: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getJob.pending]: (state, action) => {
      return {
        ...state,
        load: true,
      };
    },
  },
  [getJob.fulfilled]: (state, action) => {
    return {
      ...state,
      query: action.payload,
      company: action.payload,
    };
  },
  [getJob.rejected]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
});
export default jobSlice.reducer;
