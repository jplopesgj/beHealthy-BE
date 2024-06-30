import { Transform, Type } from "class-transformer";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsString, IsStrongPassword, ValidateNested } from "class-validator";
import { Role } from "../enum/role.enum";


export class LocationDetailsDto {
    @IsNotEmpty({ message: 'O país não pode ser vazio' })
    @IsString({ message: 'O país deve ser uma string' })
    country: string;

    @IsNotEmpty({ message: 'O estado não pode ser vazio' })
    @IsString({ message: 'O estado deve ser uma string' })
    state: string;

    @IsNotEmpty({ message: 'A cidade não pode ser vazia' })
    @IsString({ message: 'A cidade deve ser uma string' })
    city: string;
}

export class CreateUserDto {

    @IsNotEmpty({ message: 'username não pode ser vazio' })
    username: string;

    @IsNotEmpty({ message: 'nome não pode ser vazio' })
    firstName: string;

    @IsNotEmpty({ message: 'sobrenome não pode ser vazio' })
    lastName: string;

    @IsNotEmpty({ message: 'data de nascimento não pode ser vazio' })
    @Transform(({ value }) => new Date(value).toISOString())
    birthDate: Date;

    @IsNotEmpty({ message: 'senha não pode ser vazio' })
    @IsStrongPassword()
    password: string;

    @IsNotEmpty({ message: 'email não pode ser vazio' })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'cargo não pode ser vazio' })
    @IsInt({ message: 'cargo deve ser um número inteiro' })
    @IsIn(Object.values(Role), { message: 'cargo deve ter um valor válido' })
    role: number;

    @ValidateNested({ message: 'locationDetails deve ser um objeto válido' })
    @Type(() => LocationDetailsDto)
    locationDetails: LocationDetailsDto;
}
