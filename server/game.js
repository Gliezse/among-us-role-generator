const roles = {
    normal: "NORMAL",
    mentiroso: "MENTIROSO",
    interrogador: "INTERROGADOR",
    acusador: "ACUSADOR",
    callado: "CALLADO",
    persecuta: "PERSECUTA",
    bufon: "BUFON",
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
            case roles.mentiroso:
                return "No podes decir la verdad";
            case roles.interrogador:
                return "No dejes de hacer preguntas (Minimo 2 preguntas por ronda)";
            case roles.acusador:
                return "Bardeala";
            case roles.callado:
                return "Cerra la boca man (Máximo 3 palabras por meet)";
            case roles.persecuta:
                return "Defendete de todo";
            case roles.bufon:
                return "Si te echan, ganas y el juego termina."
            default:
                return "zzzz";
        }
    }
}

module.exports = {
    util,
    roles
}