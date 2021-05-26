import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class SocketService {

  constructor( private socket:Socket ) {
    this.checkSocket()
   }

  sendMessage(msg: string) {
    this.socket.emit('event', msg);
  }
  
  getMessage() {
    return this.socket.fromEvent('message');
  }

  checkSocket(){
    this.socket.on('connect',()=>{
       console.log('connected')
    })

    this.socket.on('disconnect',()=>{
      console.log('disconnect')
    })
  }
}
