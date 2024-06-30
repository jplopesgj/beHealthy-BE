import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel('Users') private readonly usersModel: Model<Users>) { }

  create(createUserDto: CreateUserDto): Promise<Users> {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  findOne(id: string): Promise<Users| null>  {
    return this.usersModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<Users | null> {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  delete(id: string): Promise<Users| null>  {
    return this.usersModel.findByIdAndDelete(id);
  }
}
