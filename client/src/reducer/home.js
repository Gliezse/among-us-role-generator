export const types = {
    JOIN_GAME_REQUEST: "home/JOIN_GAME_REQUEST",
    JOIN_GAME_SUCCESS: "home/JOIN_GAME_SUCCESS",
    JOIN_GAME_FAILURE: "home/JOIN_GAME_FAILURE",

}

const INITIAL_STATE = {
    fetching: false,
}

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case types.JOIN_GAME_REQUEST:
            return {
                ...state,
                fetching: true,
            }
        default:
            return state;
    }
}

export const actions = {
    joinGameRequest: (code, region, formikBag) => ({
        type: types.JOIN_GAME_REQUEST,
        code,
        region,
        formikBag
    })
}

export const selectors = {
    getFetching: ({ home }) => home.fetching,
}