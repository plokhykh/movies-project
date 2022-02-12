import {axiosService} from './axios.service';
import {urls} from '../configs/urls';
import {apiKey} from '../configs/constances';

export const genresService = {
    getAll: () => axiosService.get(`${urls.genres}?api_key=${apiKey}`),
};
