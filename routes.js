const { Router } = require("express");
const router = Router();
const requestIp = require("request-ip");

const { queries } = require("./db");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { util, roles } = require("./game");

router.get("/", (req, res) => {
    res.sendfile("./view/index.html")
})

router.get("/rol", async (req, res) => {
    const { id, newGame, players } =  req.query;

    const htmlFile = await JSDOM.fromFile("./view/role.html");

    const ip = requestIp.getClientIp(req);

    let message;
    let role;

    const isNewGame = newGame === "on";

    if (queries.gameExists(id)) {
        if (queries.ipHasGeneratedRole(id, ip)) {
            role = queries.getRoleByIp(id, ip);
            message = "Hola de nuevo, eres: " + role;
        } else {
            role = queries.generateAndSaveRole(id, ip);
            message = role ? "Eres: " + role : "Error"
        }
    } else if (isNewGame){
        queries.addGame(id, players, ip);
        role = queries.generateAndSaveRole(id, ip);

        message = "Nuevo juego creado con " + players + " players, eres: " + role
    } else {
        message = "El juego no existe"
    }

    const { document } = htmlFile.window;

    document.getElementById("role").innerHTML = message;
    document.getElementById("role-descriptor").innerHTML = util.getDescripcion(role);
    if (queries.getCreatorIp !== ip && role !== roles.bufon) {
        document.getElementById("terminar-partida-btn").style.display = "none";
    }
    
    res.send(htmlFile.serialize());
});

router.post("/game/end", (req, res) => {
    const { id } = req.body;

    const ip = requestIp.getClientIp(req);
    const role = queries.endGame(id, ip);

    res.json({ endedBy: role });
})

router.get("/game/status", (req, res) => {
    const { id } = req.query;

    const gameStatus = queries.gameEnded(id);

    res.json(gameStatus)
});

module.exports = router;