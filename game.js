const roles = {
    normal: "NORMAL",
    mentiroso: "MENTIROSO",
    callado: "CALLADO",
}

const util = {
    getRandomRole: () => {
        const rolKeys = Object.keys(roles);
        const random = Math.random() * (rolKeys.length - 0) + 0;

        return roles[rolKeys[Math.floor(random)]];
    },
}

module.exports = {
    util
}