import { Component, OnInit, Output, Input } from '@angular/core';
import { Server } from './model/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Array<Server> = new Array();
  typedServerName: string;
  savedServerName: string;
  allowNewServer: boolean;
  serverCreated: boolean;
  serverRemoved: boolean;
  nothingTyped: boolean;

  @Input() deleteServer: number;

  constructor() {
    this.servers.push(new Server('Valhalla'));
    this.servers.push(new Server('Burning'));
    this.servers.push(new Server('Frosthome'));

    this.servers.forEach((server: Server) => {
      server.status = this.randomStatus();
    });

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    if (this.typedServerName !== undefined && this.typedServerName.length !== 0) {
      this.servers.push(new Server(this.typedServerName, this.randomStatus()));
      this.serverCreated = true;
      this.savedServerName = this.typedServerName;
      this.nothingTyped = false;
      this.serverRemoved = false;
    } else {
      this.serverCreated = false;
      this.serverRemoved = false;
      this.nothingTyped = true;
    }
  }

  onServerDeletion(serverName: string) {
    this.servers
      .filter((server: Server) => server.serverName === serverName)
      .map((serverToDelete: Server) => {
        const index: number = this.servers.indexOf(serverToDelete);
        this.serverRemoved = true;
        this.savedServerName = serverName;
        this.serverCreated = false;
        this.nothingTyped = false;
        this.servers.splice(index, 1);
      });
  }

  randomStatus(): string {
    return Math.random() > 0.5 ? 'Working' : 'Warning';
  }

}
