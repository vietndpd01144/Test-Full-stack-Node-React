import { UserInformation } from './../interface/user.interface';
import { User } from './../schemas/user.schema';
import { UserRepository } from './../repositoies/user.repository';

import { Global, Injectable } from '@nestjs/common';
@Global()
@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository) {}

    async findUserNotFail(id: string): Promise<UserInformation> {
        return await this.userRepo.findOneById(id);
    }
}
