const Loki = require("lokijs");
const { util, roles } = require("./game");

const db = new Loki("coscu.db");

const collections = {
    games: db.addCollection("games")
}

const queries = {
    addGame: (code, region, players, ip) => {
        return collections.games.insert({ code, region, roles: [], players, ended: false, creador: ip });
    },
    getGameInfo: (code, region) => {
        return collections.games.findOne({ code, region });
    },
    gameExists: (code, region) => {
        const result = collections.games.findOne({ code, region });
        return !!result;
    },
    ipHasGeneratedRole: (code, region, ip) => {
        const game = collections.games.findOne({ code, region });
        return game.roles.some(role => role.ip === ip);
    },
    getRoleByIp: (code, region, ip) => {
        const game = collections.games.findOne({ code, region });
        return game.roles.find(role => role.ip === ip).role;
    },
    generateAndSaveRole: (code, region, ip) => {
        const game = collections.games.findOne({ code, region });
        let newRole = util.getRandomRole();
        if (game.roles.some(r => r.role === roles.bufon) && newRole === roles.bufon) {
            while (newRole === roles.bufon) {
                newRole = util.getRandomRole();
            }
        }

        game.roles = [...game.roles, {
            role: newRole,
            ip
        }];

        collections.games.update(game);

        return newRole;
    },
    endGame: (code, ip) => {
        console.log(code)
        const game = collections.games.findOne({ code });
        game.ended = true;
        const role = game.roles.find(role => role.ip === ip);
        game.endedBy = role.role;

        collections.games.update(game);

        return game.endedBy;
    },
    gameEnded: (code) => {
        const game = collections.games.findOne({ code });
        if (!game) return { status: "UNEXISTENT" }

        return game.ended ? {
            status: "ENDED",
            endedBy: game.endedBy
        } : {
            status: "ONPROGRESS"
        };
    }
}

module.exports = {
    db,
    collections,
    queries
}