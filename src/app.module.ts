import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MocController } from './moc/moc.controller';
import { MocService } from './moc/moc.service';
import { MocModule } from './moc/moc.module';
import { CourseModule } from './course/course.module';
import { AppLogger } from './logger/logger.service';

@Module({
  imports: [MocModule, CourseModule],
  controllers: [AppController, MocController],
  providers: [AppService, MocService, AppLogger],
  exports: [AppLogger],
})
export class AppModule {
  constructor(private readonly appLogger: AppLogger) {}
}
