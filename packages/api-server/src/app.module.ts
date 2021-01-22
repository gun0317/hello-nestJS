import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UsersModule,
    CarsModule,
  ],
})
export class AppModule {
}
