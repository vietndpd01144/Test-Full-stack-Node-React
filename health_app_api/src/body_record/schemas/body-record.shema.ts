import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Schema as sc } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Schema({ timestamps: true })
export class BodyRecord {
    @Prop({
        required: true,
        type: Number
    })
    weight: number;
    @Prop({ required: true, type: Number })
    fat_percentage: number;
    @Prop({ required: true, type: sc.Types.ObjectId })
    owner: User;
}
export type BodyRecordDocument = HydratedDocument<BodyRecord>;
export const BodyRecordSchema = SchemaFactory.createForClass(BodyRecord);
