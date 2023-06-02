import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketIoService {
    socketIoHome() {
        return ( { data : "data" });
    }
}
