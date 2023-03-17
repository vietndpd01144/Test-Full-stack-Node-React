import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class BodyRecord {
    @Prop({
        required: true,
        type: Number
    })
    weight: number;
    @Prop({ required: true, type: String })
    name: string;
    @Prop({ required: true, type: String })
    password: string;
}
export type BodyRecordDocument = HydratedDocument<BodyRecord>;
export const BodyRecordSchema = SchemaFactory.createForClass(BodyRecord);
