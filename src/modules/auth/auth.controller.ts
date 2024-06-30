import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './public-stratategy';
import signInDto from './dto/signin.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('/login')
    signIn(@Body() signInDto: signInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
}