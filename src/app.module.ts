import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { LogModule } from 'log/log.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, LogModule],
})
export class AppModule { }
