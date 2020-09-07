const Loki = require("lokijs");
const { util } = require("./game");

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
        const newRole = util.getRandomRole();
        const game = collections.games.findOne({ code });
        try {
            game.roles = [...game.roles, {
                role: newRole,
                ip
            }];
        } catch {
            return null;
        }

        collections.games.update(game);

        return newRole;
    },
    endGame: (code) => {
        const game = collections.games.findOne({ code });
        game.ended = true;
        collections.games.update(game);
    },
    gameEnded: (code) => {
        const game = collections.games.findOne({ code });
        return game.ended;
    }
}

module.exports = {
    db,
    collections,
    queries
}