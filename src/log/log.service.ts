import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
    debug(message: string) {
        console.log(message);
    }
}