import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { SocketIoDto } from './dto/socket-io.dto';

@WebSocketGateway()
// implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
export class SocketIoGateway {

  @WebSocketServer() server: Namespace;

  @SubscribeMessage('send-test')
  sendTest(client: any, payload: any): string{
    console.log(client, payload);
    this.server.emit('send-test', payload);
    return ("send test");
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: SocketIoDto){
    this.server.emit('message', payload);
  }
}
