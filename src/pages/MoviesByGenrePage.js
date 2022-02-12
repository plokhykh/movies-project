import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getAllMoviesByGenre} from '../store';
import {Loading, MovieCard, Pagination} from '../components';
import './movies-page/MoviesPage.css';


export const MoviesByGenrePage = () => {

    const dispatch = useDispatch();
    const { genreId } = useParams();
    const { moviesByGenre, status, error, currentPage, totalMoviesPage } = useSelector(store => store['moviesByGenre']);
    const page = 1;

    useEffect(() => {
        dispatch(getAllMoviesByGenre({ genreId, page }));
    }, [genreId]);

    return (
        <div className={'wrapper-movies-list'}>
            {status === 'loading' && <Loading/>}

            {error && <h1>{error}</h1>}

            {!!moviesByGenre.length && moviesByGenre.map(movie =>
                <Link to={`/movies/${movie.id.toString()}`} key={movie.id}>
                    <MovieCard movie={movie}/>
                </Link>,
            )}
            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllMoviesByGenre}/>
        </div>
    );
};

