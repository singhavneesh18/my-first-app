import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {

  @Output() onAddServer: EventEmitter<Server> = new EventEmitter();

  serverButtonDesc: string = 'Add New Server';
  serverButtonDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addServer(serverName: HTMLInputElement, serverDetail: HTMLInputElement) {
    this.onAddServer.emit(new Server(serverName.value, serverDetail.value));
    serverName.value = '';
    serverDetail.value = '';
    this.serverButtonDisabled = true;
  }

  checkBtnStatus(serverName: HTMLInputElement, serverDetail: HTMLInputElement) {
    console.log('serverName: ', serverName.value, ' serverDetail: ', serverDetail.value);
    this.serverButtonDisabled = (serverName.value.length == 0 || serverDetail.value.length == 0) ? true : false;
   }

}
