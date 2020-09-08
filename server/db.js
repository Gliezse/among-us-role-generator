const Loki = require("lokijs");
const { util, roles } = require("./game");

const db = new Loki("coscu.db");

const collections = {
    games: db.addCollection("games")
}

const queries = {
    addGame: (code, players, ip) => {
        collections.games.insert({ code, roles: [], players, ended: false, creador: ip });
    },
    gameExists: (code) => {
        const result = collections.games.findOne({ code });
        return !!result;
    },
    ipHasGeneratedRole: (code, ip) => {
        const game = collections.games.findOne({ code });
        return game.roles.some(role => role.ip === ip);
    },
    getRoleByIp: (code, ip) => {
        const game = collections.games.findOne({ code });
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