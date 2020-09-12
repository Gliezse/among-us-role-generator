import socketIOClient from "socket.io-client";
import { BASE_URL } from "middleware/api";

class Socket {
    constructor() {
        if (!!Socket.instance) {
            return Socket.instance;
        }

        Socket.instance = this;

        this.io = socketIOClient(BASE_URL);

        return this;
    }
}

Socket.instance = undefined;


export default Socket;