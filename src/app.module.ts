import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserRoutesModule} from "./modules/users/routes";

@Module({
  imports: [UserRoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
