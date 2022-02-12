import React from 'react';
import {useSelector} from 'react-redux';

export const GenresBadges = ({ genres }) => {

    const { genresList } = useSelector(store => store['genres']);

    const mapGenres = genresList.filter(item => genres.some(value => value === item.id));

    return (
        <>
            {mapGenres.map(item => <span key={item.id}>{item.name}, </span>)}
        </>
    );
};

