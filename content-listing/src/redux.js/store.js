import { configureStore } from '@reduxjs/toolkit';
import diagnalDataReducer from './slice/movieData';

export const store = configureStore({
    reducer: {
        content: diagnalDataReducer
    }
});


