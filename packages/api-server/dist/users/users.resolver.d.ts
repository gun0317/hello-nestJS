import { User } from './models/user.model';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private authorsService;
    constructor(authorsService: UsersService);
    getAuthor(id: number): Promise<User>;
}
