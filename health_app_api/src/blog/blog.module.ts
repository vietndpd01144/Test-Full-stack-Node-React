import { Blog, BlogSchema } from './schemas/blog.schema';
import { BlogService } from './services/blog.service';
import { BlogController } from './http/controller/blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { BlogRepository } from './repositories/blog.repository';

@Module({
    controllers: [BlogController],
    providers: [BlogService, BlogRepository],
    imports: [
        MongooseModule.forFeature([
            {
                name: Blog.name,
                schema: BlogSchema
            }
        ])
    ]
})
export class BlogModule {}
