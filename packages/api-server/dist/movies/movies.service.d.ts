import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    createOne(movieData: any): void;
}
