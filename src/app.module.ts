import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Daniel:abcdefg1234@cluster0.giqqq.mongodb.net/Crypto-Plus-backend-2?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
