import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {moviesService} from '../services';
import {genresService} from '../services/genres.service';
import {getAllMovies} from './movies.slice';

const initialState = {
    genresList: [],
};

export const getListGenres = createAsyncThunk(
    'genres/getListGenres',
    async (_, { rejectWithValue }) => {
        try {
            const genres = await genresService.getAll();
            return genres;

        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);

const genresSlice = createSlice({
    name: 'genres',
    initialState,
    extraReducers: {
        [getListGenres.pending]: (state, action) => {
            console.log('ok');
        },
        [getListGenres.rejected]: (state, action) => {
            console.log('error');
        },
        [getListGenres.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.genresList = action.payload.data.genres;
        }
    },
});

const genresReducer = genresSlice.reducer;
export default genresReducer;
