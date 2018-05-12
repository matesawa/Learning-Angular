import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  status: boolean = Math.random() > 0.5;
  @Input() serverId: Number;
  @Input() serverName: string;
  @Output() deleteServer = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  getServerStatus() {
    return this.status;
  }

  onServerDeletion(serverName: string) {
    this.deleteServer.next(serverName);
  }

}
