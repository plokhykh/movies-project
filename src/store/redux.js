import {configureStore, combineReducers} from '@reduxjs/toolkit';

import moviesReducer from './movies.slice';
import genresReducer from './genres.slice';
import moviesByGenreReducer from './moviesByGenre.slice';


const rootReducer = combineReducers({
    movies:moviesReducer,
    genres: genresReducer,
    moviesByGenre: moviesByGenreReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
