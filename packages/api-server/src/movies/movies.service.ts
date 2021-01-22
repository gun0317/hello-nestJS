import { Injectable, NotFoundException, Req, Res } from '@nestjs/common'
import { Movie } from './entities/movie.entity'

@Injectable() // Injected through provider.
export class MoviesService {
  //  Implementing fake database.
  private movies: Movie[] = []

  // @Req() req, @Res() res 를 사용할 수도 있지만 이는 Express 객체임. 만약 이걸 사용하지 않으면 Fastify로 바로 바꿀 수 있음. 사용하면 쉽게 바꿀 수 없음.
  getAll(): Movie[] {
    return this.movies
  }

  getOne(id: number): Movie {
    const movie: Movie = this.movies.find((m) => m.id === id)
    if (!movie) {
      throw new NotFoundException(`Movie with Id(${id}) not found.`)
    }
    return movie
  }

  deleteOne(id: number) {
    this.getOne(id)
    this.movies = this.movies.filter((m) => m.id != id)
  }

  createOne(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    })
  }
}
