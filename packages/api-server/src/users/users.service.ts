import { Injectable } from '@nestjs/common'
import { User } from './models/user.model'

@Injectable()
export class UsersService {
  private sampleUser: User = {
    id: 1,
    firstName: "test",
    lastName: "author"
  }

  findOneById(id:number): User {
    return this.sampleUser
  }
}
