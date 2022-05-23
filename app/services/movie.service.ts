import { getMoviesUrl } from './../config/api.config';
import { IMovie } from '@/shared/types/movie.types';
import { getGenresUrl } from '@/config/api.config';
import { axiosClassic } from './../api/interceptop';

export const MovieService = {
    async getAll(searchTerm?: string){
        return axiosClassic.get<IMovie[]>(getMoviesUrl(''),{
            params: searchTerm ? {searchTerm} : { }
        })
    },

    async getMostPopularMovies(){
        const {data: movies }= await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
        return movies
    }
}