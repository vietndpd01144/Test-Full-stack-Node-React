import { User } from './../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as sc } from 'mongoose';

@Schema({ timestamps: true })
export class Food {
    @Prop({
        required: true,
        type: String
    })
    image: string;
    @Prop({ required: true, type: String, enum: ['MORNING', 'LUNCH', 'DINNER', 'SNACK'] })
    type: string;
    @Prop({ required: true, type: sc.Types.ObjectId })
    owner: User;
}
export type FoodDocument = HydratedDocument<Food>;
export const FoodSchema = SchemaFactory.createForClass(Food);
