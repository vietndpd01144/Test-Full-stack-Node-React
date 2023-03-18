import { GetBlogsDto } from './../dto/get-blogs.dto';
import { JwtAuthGuard } from '../../../user/guards/jwt-auth.guard';
import { CurrentUser } from '../../../user/decorators/current-user.decorator';
import { Get, Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserInformation } from 'src/user/interface/user.interface';
import { BlogService } from 'src/blog/services/blog.service';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get('')
    async index(@Query() query: GetBlogsDto) {
        return this.blogService.getBlogs(query);
    }

    @Post()
    async addExercise() {}
}
