import { Blog } from './blog.interface';

export interface GetBlogResponse {
    data: {
        blogs: Blog[];
        totalRecord: number;
    };
    message: string;
}
