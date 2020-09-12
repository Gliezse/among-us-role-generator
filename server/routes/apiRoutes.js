const { Router } = require("express");
const { queries } = require("../db");
const router = Router();
const requestIp = require("request-ip");
const { util } = require("../game");

router.post("/getGame", (req, res) => {
    const { code, region } = req.body;

    const game = queries.getGameInfo(code, region)
    
    if (!game) {
        res.status(202).json({ error: "Game not found"})
    } else {
        const ip = requestIp.getClientIp(req);

        let role;
    
        if(queries.ipHasGeneratedRole(code, region, ip)) {
            role = queries.getRoleByIp(id, region, ip);
        } else {
            role = queries.generateAndSaveRole(code, region, ip);
        }

        res.status(200).json({
            code,
            region,
            role,
        })
    }
})

router.post("/createGame", (req, res) => {
    const { code, region } = req.body;

    const gameExists = queries.gameExists(code, region);
    if (gameExists) {
        res.status(202).json({ error: "Game already exists!"})
    } else {
        const game = queries.addGame(code, region, 10, requestIp.getClientIp(req));
        res.status(200).json(game)
    }
})

router.get("/getPlayersInfo", (req, res) => {
    const { code, region } =  req.query;

})

router.post("/joinGame", (req, res) => {
    const { code, region } = req.body;
    const ip = requestIp.getClientIp(req);

    let role;

    if(queries.ipHasGeneratedRole(code, region, ip)) {
        
    } else {
        role = queries.getRoleByIp(id, ip);
    }

})

module.exports = router;