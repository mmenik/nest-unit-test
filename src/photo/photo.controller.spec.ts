import { Test } from '@nestjs/testing';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../log/log.service';

describe('photo controller', () => {
    const photos: Photo[] = [
        { name: 'name1', filename: 'filename1', description: 'description1', isPublished: true },
        { name: 'name2', filename: 'filename2', description: 'description2', isPublished: true },
        { name: 'name3', filename: 'filename3', description: 'description3', isPublished: true },
    ];

    let photoController: PhotoController;
    let photoService: PhotoService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                PhotoService,
                {
                    provide: getRepositoryToken(Photo),
                    useClass: Repository,
                },
            ],
            imports: [LogService],
            controllers: [PhotoController],
        }).compile();

        photoController = module.get<PhotoController>(PhotoController);
        photoService = module.get<PhotoService>(PhotoService);
    });

    it('should behave...', async () => {
        jest.spyOn(photoService, 'findAll').mockImplementation(() => photos);

        expect(await photoController.findAll()).toBe(photos);
    });

    it('should behave...', async () => {
        jest.spyOn(photoService, 'create').mockImplementation(() => photos[0]);

        expect(await photoController.create(photos[0])).toBe(photos[0]);
    });
});
