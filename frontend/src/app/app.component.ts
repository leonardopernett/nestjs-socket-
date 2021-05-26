import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  @ViewChild('text') text:ElementRef

  constructor(private socketService:SocketService){}

   send(){
     this.socketService.sendMessage(this.text.nativeElement.value)
   }

   ngOnInit(){
       this.socketService.getMessage().subscribe(
          res => console.log(res)
       )
   }
}
