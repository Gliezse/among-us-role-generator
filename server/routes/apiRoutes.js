const { Router } = require("express");
const router = Router();

router.get("/role", async (req, res) => {
    const { id, newGame, players } =  req.query;

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


module.exports = router;