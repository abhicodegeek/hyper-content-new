import { Test, TestingModule } from '@nestjs/testing';
import { MocService } from './moc.service';

describe('MocService', () => {
  let service: MocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MocService],
    }).compile();

    service = module.get<MocService>(MocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
