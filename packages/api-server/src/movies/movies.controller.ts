import { Controller, Param, Get, Delete, Post, Patch, Body, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { Movie } from './entities/movie.entity'
import { CreateMovieDto } from './dto/create-movie.dto'

@Controller('movies') // prefix for all the urls.
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId)
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.moviesService.createOne(data)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id)
  }
}
