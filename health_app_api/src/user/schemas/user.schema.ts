import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({
    unique: true,
    required: true,
    type: String,
  })
  email: string;
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: true, type: String })
  password: string;
}
export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
