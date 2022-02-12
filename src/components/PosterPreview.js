import React from 'react';
import {posterUrl} from '../configs/urls';

export const PosterPreview = ({poster_path='', size_poster, title }) => {


    const poster_url = `${posterUrl}${size_poster}${poster_path}`

    return(
        <div>
            <img src={poster_url} alt={title}/>
        </div>
    );
};

