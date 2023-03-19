import { BlogRepository } from './../repositories/blog.repository';
import { GetBlogsDto } from '../http/dto/get-blogs.dto';
import { UserInformation } from '../../user/interface/user.interface';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class BlogService {
    constructor(private blogRepo: BlogRepository) {}

    async getBlogs(query: GetBlogsDto) {
        const response = await this.blogRepo.getBlog(query.limit, query.page);
        return {
            statusCode: HttpStatus.CREATED,
            data: response,
            message: 'Get blog successfully'
        };
    }
}
