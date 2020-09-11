const { Router } = require("express");
const { queries } = require("../db");
const router = Router();
const requestIp = require("request-ip");

router.post("/getGame", (req, res) => {
    const { code, region } = req.body;

    const game = queries.getGameInfo(code, region)
    
    if (!game) {
        res.status(202).json({ error: "Game not found"})
    } else {
        res.status(200).json(game)
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

router.post("/joinGame", (req, res) => {
    const {  }
})

module.exports = router;