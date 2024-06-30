import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './schema/user.schema';
import { Public } from '../auth/public-stratategy';


@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Public()
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    if (!createUserDto || Object.keys(createUserDto).length === 0) {
      throw new BadRequestException('O corpo da requisição não pode estar vazio.');
    }
    
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Users| null>   {
    return this.usersService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<Users | null> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string): Promise<Users| null> {
    return this.usersService.delete(id);
  }
}
