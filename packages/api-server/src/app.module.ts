import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { UsersModule } from './users/user.module'
import { MoviesModule } from './movies/movies.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UsersModule, MoviesModule
  ],
})
export class AppModule {
}
