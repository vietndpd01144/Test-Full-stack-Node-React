import { User } from '../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as sc } from 'mongoose';

@Schema({ timestamps: true })
export class Blog {
    @Prop({
        required: true,
        type: String
    })
    title: string;
    @Prop({ required: true, type: Array<String> })
    tags: string[];
    @Prop({ required: true, type: String })
    content: string;
}
export type BlogDocument = HydratedDocument<Blog>;
export const BlogSchema = SchemaFactory.createForClass(Blog);
