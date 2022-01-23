import { Component, OnInit } from '@angular/core';
import { Server, ServerDetails } from '../server.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  servers: Server[] = [
    new Server('server1', 'detail1'), new Server('server2', 'detail2'),
    new Server('server3', 'detail3'),new Server('server4', 'detail4'),
  ];

  server: Server = new Server('', '');

  constructor() { }

  ngOnInit(): void {
  }

  addServer(server: Server) {
    this.servers.push(server);
  }

  deleteServer(serverIndex: number) {
    this.servers.splice(serverIndex, 1);
  }

  editServer(serverDetails: ServerDetails) {
    this.server = serverDetails.server;
   }

}
