import { Component, OnInit, Output, Input } from '@angular/core';
import { Server } from './model/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Array<Server> = new Array();
  typedServerName = '';
  allowNewServer = false;
  warningMessage: string;

  @Input() deleteServer: number;

  constructor() {
    this.servers.push(new Server('Valhalla'));
    this.servers.push(new Server('Burning'));
    this.servers.push(new Server('Frosthome'));

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    if (this.typedServerName.length !== 0) {
      this.servers.push(new Server(this.typedServerName));
      this.typedServerName = '';
      this.warningMessage = null;
    } else {
      this.warningMessage = 'Incorrect server name. Please fill server name below.';
    }
  }

  onServerDeletion(serverName: string) {
    this.servers
      .filter((server: Server) => server.serverName === serverName)
      .map((serverToDelete: Server) => {
        const index: number = this.servers.indexOf(serverToDelete);
        this.servers.splice(index, 1);
      });
  }

}
