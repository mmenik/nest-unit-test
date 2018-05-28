import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { LogModule } from 'log/log.module';

@Module({
    imports: [TypeOrmModule.forFeature([Photo]), LogModule],
    providers: [PhotoService],
    controllers: [PhotoController],
})
export class PhotoModule { }