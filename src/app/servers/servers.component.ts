import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No New Servers Created"; 
serverId =0;
serverCreated=false;
servers=[0,12];
  constructor() {
   }
   onCreateServer()
   {
     this.servers.push(this.serverId);
     this.serverCreationStatus="New Server Created with ID : "+this.serverId;
     this.serverId=0;
   }
   onUpdateServerId(event:any)
   {
     this.serverId =(<HTMLInputElement>event.target).valueAsNumber
   }
  ngOnInit() {
  }

}
