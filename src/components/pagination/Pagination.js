import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {getAllMoviesByGenre} from '../../store';
import './Pagination.css';


export const Pagination = ({ totalMoviesPage, currentPage, pageChange }) => {
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(10);

    const dispatch = useDispatch();
    const { genreId } = useParams();

    const pages = [];

    const onAddNextPages = () => {
        if (endPage + 10 <= totalMoviesPage) {
            setStartPage(startPage + 10);
            setEndPage(endPage + 10);
        }
    };

    const onRemovePages = () => {
        if (endPage - 10 > 0) {
            setStartPage(startPage - 10);
            setEndPage(endPage - 10);
        }
    };

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChanged = (page) => {
        if (pageChange === getAllMoviesByGenre) {
            dispatch(pageChange({ genreId, page }));
        }
        dispatch(pageChange({ page }));
    };
    return (
        <div className="pagination">
            <div onClick={onRemovePages} className="pagination-btn">Previous</div>
            {
                pages.map(item => <div key={item}
                                       className={`pagination-pages ${currentPage === item && 'active-page'}`}
                                       onClick={() => {
                                           onPageChanged(item);
                                       }}>{item}</div>)
            }
            <div onClick={onAddNextPages} className="pagination-btn">Next</div>
        </div>

    );
};

