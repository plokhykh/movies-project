import {axiosService} from './axios.service';
import {urls} from '../configs/urls';
import {apiKey} from '../configs/constances';

export const moviesService = {
    getAll: (page) => axiosService.get(`${urls.movies}?api_key=${apiKey}&page=${page}`),
    getByGenre: (genreId, page) => axiosService.get(`${urls.movies}?api_key=${apiKey}&with_genres=${genreId}&page=${page}`),
    getById: (id) => axiosService.get(`${urls.movie}/${id}?api_key=${apiKey}`),
};
