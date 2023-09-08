import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin';
import { SignupDto } from './dtos/signup';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

       @Post('signin')
  signin(@Body() signin: SigninDto) {
    return this.authService.signin(signin);
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
