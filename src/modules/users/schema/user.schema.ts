import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../enum/role.enum';


@Schema({ timestamps: true, collection: 'healthy_users' })
export class Users {

    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    email: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    birthDate: Date;

    @Prop({ type: Object })
    locationDetails: {
        country: string,
        state: string,
        city: string
    };

    @Prop()
    role: Role;
}

export const UsersSchema = SchemaFactory.createForClass(Users);