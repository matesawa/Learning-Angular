export class Server {
    serverName: string;
    status: string;

    constructor(serverName: string, status?: string) {
        this.serverName = serverName;
        this.status = status;
    }
}
