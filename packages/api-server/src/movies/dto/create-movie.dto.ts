import { IsNumber, IsOptional, IsString, Length } from 'class-validator'

export class CreateMovieDto {
  @IsString()
  @Length(1, 20)
  readonly title: string

  @IsNumber()
  readonly year: number

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[]
}
