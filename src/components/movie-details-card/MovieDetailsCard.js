import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import backArrow from '../../images/left arrow.png';
import {getMovieById} from '../../store';
import {PosterPreview, Rating} from '../index';
import {largeSizePoster} from '../../configs/constances';
import './MovieDetailsCard.css';


export const MovieDetailsCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movie } = useSelector(store => store['movies']);

    useEffect(() => {
        dispatch(getMovieById({ id }));
    }, [id]);

    const back = () => {
        navigate(-1);
    };

    const {
        backdrop_path,
        title,
        overview,
        budget,
        genres,
        production_countries,
        runtime,
        production_companies,
        release_date,
        popularity,
        vote_average,
        vote_count,
    } = movie;

    return (
        <div className={'movie-detail-wrapper'}>

            <div className={'movie-detail-back'} onClick={back}>
                <img src={backArrow} alt="back arrow"/>
            </div>

            {!!movie.genres &&
            <div className={'movie-detail'}>
                <PosterPreview poster_path={backdrop_path} size_poster={largeSizePoster}/>
                <p className={'movie-detail-title'}>{title}</p>
                <div>
                    <p className={'movie-detail-overview'}>{overview}</p>
                    <div className={'movie-detail-accent'}>

                        <p>vote average: <Rating vote_average={vote_average}/> vote {vote_count} people</p>
                        <p>popularity: {popularity}</p>
                        <p>budget: {budget}</p>
                        <p>genres: {genres.map(item => <span key={item.id}>{item.name}, </span>)}</p>
                        <p>production_countries: {production_countries.map((item, index) => <span
                            key={index}>{item.name}, </span>)}</p>
                        <p>runtime: {runtime}</p>
                        <p>release date: {release_date}</p>
                        <div className={'movie-detail-production'}>
                            production companies:
                            <div className={'movie-detail-production-companies'}>
                                {production_companies.map(item =>
                                    <p key={item.id}>
                                        {item.name}
                                        <div className={'production-companies-logo'}>
                                            <PosterPreview poster_path={item.logo_path} size_poster={'200'}/>
                                        </div>
                                    </p>,
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>

    );
};

