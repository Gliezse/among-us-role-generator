const { Router } = require("express");
const router = Router();
const requestIp = require("request-ip");

const { queries } = require("./db");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { util } = require("./game");

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
            message = "Hola de nuevo, eres: " + queries.getRoleByIp(id, ip);
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

    htmlFile.window.document.getElementById("role").innerHTML = message;
    htmlFile.window.document.getElementById("role-descriptor").innerHTML = util.getDescripcion(role);
    
    res.send(htmlFile.serialize());
});

router.get("/gamestatus", (req, res) => {
    const { id } =  req.body;

    res.json({
        status: queries.gameEnded(id) ? "ENDED" : "ONPROGRESS"
    })
})

module.exports = router;