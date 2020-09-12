export const types = {
    ENTER_GAME: "game/ENTER_GAME",
}

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const actions = {
    enterGame: (game, role) => ({
        type: types.ENTER_GAME,
        game,
        role
    })
}

export const selectors = {

}