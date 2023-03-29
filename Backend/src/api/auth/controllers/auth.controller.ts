import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/api/users/dto/createUserDto.dto';
import { loginUserDto } from '../dto/loginUserDto.dto';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(@Body() body: loginUserDto) {
        return this.authService.login(body);
    }
    @Post('register')
    register(@Body() body: CreateUserDto) {
        return this.authService.register(body);
    }
}