import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  serverId: number = 10;
  serverStatus = 'offline';
  enableButton: boolean = false;
  serverCreateMsg = 'Server is not created yet!!';

  constructor() { 
    // while(true) {
      setTimeout(()=> {
        this.enableButton = true;
      }
      ,2000);
    // }
  }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  createServer() {
    this.serverCreateMsg = 'Server is created!!';
  }

}
