import { Blog, BlogDocument } from './../schemas/blog.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class BlogRepository {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

    async getBlog(limit?: number, page?: number) {
        return {
            blogs: await this.blogModel
                .find()
                .skip(page ? limit * (page - 1) : 0)
                .limit(limit ?? 8)
                .sort({ createdAt: -1 })
                .select(['_id', 'title', 'image', 'tags', 'contents', 'createdAt']),
            totalRecord: await this.blogModel.count()
        };
    }
}
