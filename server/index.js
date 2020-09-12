const express = require("express");
const app = express();
const cors = require('cors');

const routes = require("./routes/routes");
const setSocket = require("./socket");
const socket = require("socket.io");

app.use(cors())
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 6969;

const server = app.listen(PORT, () => console.log("listening " + PORT));

// setSocket(server);

const io = socket(server);

let sequenceNumberByClient = new Map();

io.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    sequenceNumberByClient.set(socket, 1);

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});

// sends each client its current sequence number
setInterval(() => {
    for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
        client.emit("seq-num", sequenceNumber);
        sequenceNumberByClient.set(client, sequenceNumber + 1);
    }
}, 1000);