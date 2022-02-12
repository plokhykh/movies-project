import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from '../services';


const initialState = {
    movies: [],
    movie: {},
    status: null,
    error: null,
    currentPage: 1,
    totalMoviesPage: 0,
};

export const getAllMovies = createAsyncThunk(
    'movies/getAllMovies',
    async ({ page }, { rejectWithValue }) => {
        try {
            const movies = await moviesService.getAll(page);
            console.log(movies.data);
            return movies.data;

        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);

export const getMovieById = createAsyncThunk(
    'movies/getMovieById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const movie = await moviesService.getById(id);
            return movie.data;

        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movies = action.payload.results;
            state.currentPage = action.payload.page
            state.totalMoviesPage = action.payload.total_pages;
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movie = action.payload;
        },

    },
});

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
