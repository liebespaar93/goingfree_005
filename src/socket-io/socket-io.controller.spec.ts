import { Test, TestingModule } from '@nestjs/testing';
import { SocketIoController } from './socket-io.controller';

describe('SocketIoController', () => {
  let controller: SocketIoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocketIoController],
    }).compile();

    controller = module.get<SocketIoController>(SocketIoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
