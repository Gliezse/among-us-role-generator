const { Router } = require("express");
const router = Router();
const requestIp = require("request-ip");

const { db, collections, queries } = require("./db");
const { util } = require("./game");

router.get("/", (req, res) => {
    res.sendfile("./view/index.html")
})

router.get("/rol", (req, res) => {
    const { id, newGame, players } =  req.query;

    const ip = requestIp.getClientIp(req);

    const isNewGame = newGame === "on";

    if (queries.gameExists(id)) {
        if (queries.ipHasGeneratedRole(id, ip)) {
            res.send("Hola de nuevo, eres: " + queries.getRoleByIp(id, ip));
        } else {
            const role = queries.generateAndSaveRole(id, ip);
            res.send(role ? "Eres: " + role : "Error")
        }
    } else if (isNewGame){
        queries.addGame(id, players);
        const role = queries.generateAndSaveRole(id, ip);

        res.send("Nuevo juego creado con " + players + " players, eres: " + role)
    } else {
        res.send("El juego no existe")
    }
});



module.exports = router;