import { UserInformation } from './../interface/user.interface';
import { SignupDto } from './../http/dto/signup.dto';
import { User, UserDocument } from './../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private useModel: Model<UserDocument>) {}

    async isEmailUnique(email: string) {
        const user = await this.useModel.findOne({ email });
        if (user) {
            throw new BadRequestException('Email already exist.');
        }
    }

    async saveUser(email: string, name: string, password: string) {
        return await new this.useModel({ email, password, name }).save();
    }

    async findOneByEmail(email: string, select?: string[] | string) {
        return this.useModel.findOne({ email }).select(select);
    }

    async findOneById(id: string): Promise<UserInformation> {
        return await this.useModel.findById(id);
    }
}
