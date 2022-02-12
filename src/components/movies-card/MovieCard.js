import React from 'react';

import {smallSizePoster} from '../../configs/constances';
import {PosterPreview, GenresBadges} from '../index';
import './MovieCard.css';

export const MovieCard = ({ movie: { poster_path, title, vote_average, genre_ids } }) => {

    return (
        <div className={'movie-card'}>
            <div className={'movie-card-poster'}>
                <PosterPreview poster_path={poster_path} size_poster={smallSizePoster} title={title}/>
            </div>
            <div>
                <p className={'movie-card-title'}>{title}</p>
                <p className={'movie-card-badge'}><GenresBadges genres={genre_ids}/></p>
                <p className={'movie-card-vote'}>{vote_average}</p>
            </div>
        </div>
    );
};

