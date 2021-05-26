import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway()
export class SocketGateway {

  @WebSocketServer()
  socket:Socket

  @SubscribeMessage('event')
  handlerSend(@MessageBody() message:string ){
     this.socket.emit('message', message) 
  }

}