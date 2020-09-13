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

        const { code: newCode, region: newRegion } = game; 

        res.status(200).json({
            game: {
                code: newCode,
                region: newRegion,
            },
            role,
            canEnd: util.canEnd(game, ip)
        })
    }
})

router.post("/createGame", (req, res) => {
    const { code, region } = req.body;

    const gameExists = queries.gameExists(code, region);
    if (gameExists) {
        res.status(202).json({ error: "Game already exists!"})
    } else {
        const ip = requestIp.getClientIp(req);

        const game = queries.addGame(code, region, 10, ip);
        const role = queries.generateAndSaveRole(code, region, ip);
        
        res.status(200).json({
            game: {
                code: game.code, 
                region: game.region
            },
            role,   
            canEnd: util.canEnd(game, ip)
        })
    }
})

router.post("/getStatus", (req, res) => {
    const { code, region } =  req.body;
    const game = queries.getGameInfo(code, region);

    if (!game) {
        res.status(202).json({ error: "Game doesn't exist" });
    } else {
        const { ended } = game;
        res.status(200).json({ 
            status: ended ? "restarted" : "onProgress"
        })
    }
})

router.post("/joinGame", (req, res) => {
    const { code, region } = req.body;
    const ip = requestIp.getClientIp(req);

    let role;

    if(queries.ipHasGeneratedRole(code, region, ip)) {
        role = queries.getRoleByIp(code, region, ip);
    } else {
        role = queries.generateAndSaveRole(code, region, ip);
    }

    const game = queries.getGameInfo(code, region);

    res.json({ 
        game: {
            code: game.code, 
            region: game.region
        },
        role,
        canEnd: util.canEnd(game, ip)
    })
})

router.post("/resetGame", (req, res) => {
    const { code, region } = req.body;
    const ip = requestIp.getClientIp(req);

    const game = queries.getGameInfo(code, region);
    if (!game || !util.canEnd(game, ip)) {
        res.status(403);
    } else {
        queries.resetGameRoles(game);
    }

    const role = queries.generateAndSaveRole(code, region, ip);

    res.status(200).json({
        game: {
            code: game.code, 
            region: game.region
        },
        role,   
        canEnd: util.canEnd(game, ip)
    });
});

module.exports = router;