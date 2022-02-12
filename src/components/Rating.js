import React, {useState} from 'react';
import {RatingStar} from 'rating-star';

export const Rating = ({ vote_average }) => {
    const [rating, setRating] = useState(vote_average);

    return (
        <RatingStar
            maxScore={10}
            rating={rating}
        />
    );
};

