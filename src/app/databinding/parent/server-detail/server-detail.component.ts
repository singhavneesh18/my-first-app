import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit, OnChanges {

  @Input('server') server: Server = new Server('', '');

  // server: Server = new Server('','');

  @Output() onAddServer: EventEmitter<Server> = new EventEmitter();

  serverButtonDesc: string = 'Add New Server';
  serverButtonDisabled: boolean = true;
  hideUpdateBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateServerTriggered(changes['server'].currentValue);
  }

  addServer(serverName: string, serverDetail: string) {
    this.onAddServer.emit(new Server(serverName, serverDetail));
    this.server = new Server('', '');
    this.serverButtonDisabled = true;
  }

  updateServerTriggered(server: Server) {
    if (!this.validateServerInput(server.serverName, server.serverDetail)) {
      this.hideUpdateBtn = true;
      this.serverButtonDisabled = false;
    }
  }

  checkBtnStatus(serverName: string, serverDetail: string) {
    this.serverButtonDisabled = this.validateServerInput(serverName, serverDetail) ? true : false;
  }

  private validateServerInput(serverName: string, serverDetail: string) {
    return serverName.length == 0 || serverDetail.length == 0;
  }

  updateServerDetails() {
    this.server = new Server('', '');
    this.hideUpdateBtn = false;
    this.serverButtonDisabled = true;
  }
}
