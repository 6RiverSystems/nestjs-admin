import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import { AdminModule } from './admin/admin.module'

@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
