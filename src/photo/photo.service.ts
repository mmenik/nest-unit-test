import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Photo } from './photo.entity';
import { LogService } from 'log/log.service';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
    private readonly logService: LogService,
  ) { }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(photoEntry: DeepPartial<Photo>): Promise<Photo> {
    this.logService.debug('create');
    const photo = new Photo();
    Object.assign(photo, photoEntry);
    const savedPhoto = await this.photoRepository.save(photo);
    return savedPhoto;
  }
}