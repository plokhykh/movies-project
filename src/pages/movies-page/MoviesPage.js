import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {getAllMovies, getListGenres} from '../../store';
import {MovieCard, Loading, Pagination} from '../../components';
import './MoviesPage.css';


export const MoviesPage = () => {
    const { movies, status, error, currentPage, totalMoviesPage } = useSelector(store => store['movies']);
    const dispatch = useDispatch();
    const page = 1;

    useEffect(() => {
        dispatch(getAllMovies({ page }));
        dispatch(getListGenres());
    }, []);

    return (
        <div className={'wrapper-movies-list'}>
            {status === 'loading' && <Loading/>}

            {error && <h1>{error}</h1>}

            {!!movies.length && movies.map(movie =>
                <Link to={`/movies/${movie.id.toString()}`} key={movie.id}>
                    <MovieCard movie={movie}/>
                </Link>,
            )}
            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllMovies}/>
        </div>
    );
};
