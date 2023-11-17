import { Controller, Request, Post, Body } from '@nestjs/common';

import { Public } from './custom-decorators';
import { RegisterUserDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginUser(req.body);
  }

  @Public()
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }
}
