import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:28017/be_healthy'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
