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
  constructor() {
   }

   onAllowNewServer()
   {
    if(this.serverId =0)
    {
      this.allowNewServer=false;
    }
    else 
    {
      this.allowNewServer=true;
    }
   }
   onCreateServer()
   {
     this.serverCreationStatus="New Server Created with ID : "+this.serverId;
   }
   onUpdateServerId(event:any)
   {
     this.serverId =(<HTMLInputElement>event.target).valueAsNumber
   }
  ngOnInit() {
  }

}
