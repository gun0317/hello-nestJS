import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { User } from './models/user.model'
import { UsersService } from './users.service'

@Resolver(of => User)
export class UsersResolver {
  constructor(private authorsService: UsersService) {}

  @Query(returns => User)
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id)
  }
}
