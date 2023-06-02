import { Controller, Get, Render } from '@nestjs/common';
import { SocketIoService } from './socket-io.service';

@Controller('socket-io')
export class SocketIoController {
    constructor(private readonly SocketIoService: SocketIoService) {}

  @Get()
  @Render('socket-io/socket-io.hbs')
  socketIoHome() {
    return this.SocketIoService.socketIoHome();
  }
}
