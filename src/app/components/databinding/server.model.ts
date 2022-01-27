
export class Server { 
    constructor(public serverName: string, public serverDetail: string) { }
}

export class ServerDetails { 
    constructor(public serverIndex: number, public server: Server) {}
}