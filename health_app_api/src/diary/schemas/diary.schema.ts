import { User } from '../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as sc } from 'mongoose';

@Schema({ timestamps: true })
export class Diary {
    @Prop({
        required: true,
        type: String
    })
    title: string;
    @Prop({ required: true, type: String })
    description: string;
    @Prop({ required: true, type: sc.Types.ObjectId })
    owner: User;
}
export type DiaryDocument = HydratedDocument<Diary>;
export const DiarySchema = SchemaFactory.createForClass(Diary);
