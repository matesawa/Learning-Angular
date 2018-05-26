import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() serverId: Number;
  @Input() server: Server;
  @Output() deleteServer = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  onServerDeletion(serverName: string) {
    this.deleteServer.next(serverName);
  }

  getServerStatusColor(): string {
    return this.server.status === 'Warning' ? 'red' : 'green';
  }

}
