import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const getMovieData = (data) => {
    if (data && data.page && data.page['content-items'] && data.page['content-items']['content']) {
            return data.page['content-items']['content'];
        }
        return [];
  }

export const getData = createAsyncThunk("getData", async() => {
    await axios.get('https://test.create.diagnal.com/data/page1.json')
    .then((response) => {
        return response;
    })
    .catch((err) => {
        console.error(err);
    })
});

const contentSlice = createSlice({
    name: "diagnalData",
    initialState: {
        data: {},
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false,
            state.data = getMovieData(action.payload)
        })
        builder.addCase(getData.rejected, (state, action) => {
            console.log("Error" , action.payload),
            state.isError = true
        })
        // [getData.pending]:(state) => {
        //     state.isLoading = true
        // },
        // [getData.fulfilled]:(state, action) => {
        //     state.isLoading = false,
        //     state.data = getMovieData(action.payload)
        // },
        // [getData.fulfilled]:(state, action) => {
        //     state.isLoading = false,
        //     state.error = action.payload
        // }
    }
});

export default contentSlice.reducer;
