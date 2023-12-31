import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repositories';
import { PrismaService } from './prisma.service';
import { CategoriesRepository } from './repositories/categories.repositories';

@Global()
@Module({
  controllers: [],
  providers: [UsersRepository, PrismaService, CategoriesRepository],
  exports: [UsersRepository, CategoriesRepository],
})
export class DatabaseModule {}
