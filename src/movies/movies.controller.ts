import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServices: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesServices.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.moviesServices.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesServices.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.moviesServices.deleteOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesServices.update(id, updateData);
  }
}
