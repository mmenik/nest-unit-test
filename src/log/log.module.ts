import { LogService } from './log.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [LogService],
    exports: [LogService],
})
export class LogModule { }
