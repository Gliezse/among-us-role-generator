const Loki = require("lokijs");
const { util, roles } = require("./game");

const db = new Loki("coscu.db");

const collections = {
    games: db.addCollection("games")
}

const queries = {
    addGame: (code, region, players, ip) => {
        console.log(code, region, players, ip)
        const asd = collections.games.insert({ code, region, roles: [], players, ended: false, creador: ip });
        console.log(asd)
        return asd;
    },
    getGameInfo: (code, region) => {
        const asd = collections.games.findOne({ code, region });
        console.log(asd)
        return asd;
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
    generateAndSaveRole: (code, ip) => {
        const game = collections.games.findOne({ code });
        let newRole = util.getRandomRole();

        if (game.roles.includes(r => r === roles.bufon) && newRole === roles.bufon) {
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