import { Test } from '@nestjs/testing';
import { PhotoService } from './photo.service';
import { Repository, ObjectID } from 'typeorm';
import { Photo } from './photo.entity';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from '../log/log.service';
import { LogModule } from '../log/log.module';

describe('photo service', () => {
    const photos: Photo[] = [
        { name: 'name1', filename: 'filename1', description: 'description1', isPublished: true },
        { name: 'name2', filename: 'filename2', description: 'description2', isPublished: true },
        { name: 'name3', filename: 'filename3', description: 'description3', isPublished: true },
    ];

    let photoService: PhotoService;
    let photoRepository: Repository<Photo>;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [
                LogService,
                PhotoService,
                {
                    provide: getRepositoryToken(Photo),
                    useClass: Repository,
                },
            ],
        }).compile();

        photoService = module.get<PhotoService>(PhotoService);
        photoRepository = module.get<Repository<Photo>>(getRepositoryToken(Photo));
    });

    it('should be able to create a photo', async () => {

        jest.spyOn(photoRepository, 'save').mockImplementation(enity => enity);

        const photo = await photoService.create(photos[0]);

        expect(photo).toEqual(photos[0]);
    });
});
