import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from '../services';


const initialState = {
    moviesByGenre: [],
    status: null,
    error: null,
    currentPage: 1,
    totalMoviesPage: 0,
};

export const getAllMoviesByGenre = createAsyncThunk(
    'movies/getAllMoviesByGenre',
    async ({ genreId, page }, { rejectWithValue }) => {
        try {
            const movies = await moviesService.getByGenre(genreId, page);
            return movies.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);


const moviesByGenreSlice = createSlice({
    name: 'moviesByGenre',
    initialState,
    extraReducers: {
        [getAllMoviesByGenre.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllMoviesByGenre.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.moviesByGenre = action.payload.results;
            state.currentPage = action.payload.page
            state.totalMoviesPage = action.payload.total_pages;
        },
        [getAllMoviesByGenre.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

const moviesByGenreReducer = moviesByGenreSlice.reducer;
export default moviesByGenreReducer;
