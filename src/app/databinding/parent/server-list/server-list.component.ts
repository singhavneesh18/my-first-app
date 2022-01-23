import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Server, ServerDetails } from '../../server.model';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  @Input('serverList') servers: Server[] = [];

  @Output('deleteServer') deleteServer: EventEmitter<number> = new EventEmitter();

  @Output('editServer') editServer: EventEmitter<ServerDetails> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  

}
