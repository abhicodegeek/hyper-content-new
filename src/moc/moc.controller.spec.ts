import { Test, TestingModule } from '@nestjs/testing';
import { MocController } from './moc.controller';

describe('MocController', () => {
  let controller: MocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MocController],
    }).compile();

    controller = module.get<MocController>(MocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
