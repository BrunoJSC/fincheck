import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserid';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }
}
