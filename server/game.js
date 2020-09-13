const roles = {
    normal: "normal",
    liar: "liar",
    interrogator: "interrogator",
    accuser: "accuser",
    quiet: "quiet",
    paranoid: "paranoid",
    buffoon: "buffoon",
}

const util = {
    getRandomRole: () => {
        const rolKeys = Object.keys(roles);
        const random = Math.random() * (rolKeys.length - 0) + 0;

        return roles[rolKeys[Math.floor(random)]];
    },
    getDescripcion: (rol) => {
        switch (rol) {
            case roles.normal:
                return "Juga como siempre";
            case roles.liar:
                return "No podes decir la verdad";
            case roles.interrogator:
                return "No dejes de hacer preguntas (Minimo 2 preguntas por ronda)";
            case roles.accuser:
                return "Bardeala";
            case roles.quiet:
                return "Cerra la boca man (Máximo 3 palabras por meet)";
            case roles.paranoid:
                return "Defendete de todo";
            case roles.buffoon:
                return "Si te echan, ganas y el juego termina."
            default:
                return "zzzz";
        }
    },
    canEnd: (game, ip) => game.creador === ip,
    validateAndFormatCode: (code) => {
        if (code && RegExp("^[a-zA-Z]{4}$").test(code)) {
            return code.toUpperCase();
        } else {
            return null;
        }
    }
}

module.exports = {
    util,
    roles
}