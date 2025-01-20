import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppLogger } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: AppLogger,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/dev')
  getData(): string {
    this.logger.log('hello, my first log in hyper content service!');
    return this.appService.getData();
  }

  @Post('/createApi')
  createResource(): string {
    return 'created!';
  }
}
