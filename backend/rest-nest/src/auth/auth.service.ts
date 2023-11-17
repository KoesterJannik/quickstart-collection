import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';
import { LoginUserDto, RegisterUserDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginUserDto.email,
      },
    });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<any> {
    const isEmailInUse = await this.prismaService.user.findUnique({
      where: {
        email: registerUserDto.email,
      },
    });

    if (isEmailInUse) {
      throw new BadRequestException('Email already in use');
    }
    const hashedPassword = await this.hashPassword(registerUserDto.password);
    const newUser = await this.prismaService.user.create({
      data: {
        email: registerUserDto.email,
        password: hashedPassword,
      },
    });
    const payload = { email: newUser.email, sub: newUser.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
