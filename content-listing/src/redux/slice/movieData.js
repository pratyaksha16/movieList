import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getData = createAsyncThunk("getData", async() => {
    await axios.get('https://test.create.diagnal.com/data/page1.json')
    .then((response) => {
        return response;
    })
    .catch((err) => {
        console.error(err);
    })
});

export const movieData = createSlice({
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
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(getData.rejected, (state, action) => {
            console.log("Error" , action.payload)
            state.isError = true
        })
    }
});

export default movieData.reducer;
