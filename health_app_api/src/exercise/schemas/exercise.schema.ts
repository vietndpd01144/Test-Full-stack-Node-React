import { User } from '../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as sc } from 'mongoose';

@Schema({ timestamps: true })
export class Exercise {
    @Prop({
        required: true,
        type: String
    })
    name: string;
    @Prop({ required: true, type: Number })
    calories: number;
    @Prop({ required: true, type: Number })
    time: number;
    @Prop({ required: true, type: sc.Types.ObjectId })
    owner: User;
}
export type ExerciseDocument = HydratedDocument<Exercise>;
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
