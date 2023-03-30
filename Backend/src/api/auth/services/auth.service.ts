import { BadRequestException, Get, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { IUser } from 'src/api/users/interfaces/user.interface';
import { loginUserDto } from '../dto/loginUserDto.dto';
import { UserService } from 'src/api/users/services/user.service';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/api/users/dto/createUserDto.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<IUser>,
        private usersService: UserService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    async login(body: loginUserDto) {
        let { username, password } = body;
        console.log(username, password);
        
        let user = await this.userModel.findOne({ username });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                const token = await this.jwtService.signAsync({ username }, { expiresIn: this.configService.get('EXPIRES_IN'), secret: this.configService.get('JWT_SECRET') })
                return ({ token: 'Bearer ' + token, user: { username: user.username, email: user.email, role: user.role } })
            }
        } else {
            throw new BadRequestException('Wrong username or password');
        }
    }

    async register(body: CreateUserDto) {
        return this.usersService.create(body);
    }
}
