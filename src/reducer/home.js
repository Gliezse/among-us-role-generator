export const types = {
    GET_GAME_REQUEST: "home/GET_GAME_REQUEST",
    GET_GAME_SUCCESS: "home/GET_GAME_SUCCESS",
    GET_GAME_FAILURE: "home/GET_GAME_FAILURE",
    CREATE_GAME_REQUEST: "home/CREATE_GAME_REQUEST",
    CREATE_GAME_SUCCESS: "home/CREATE_GAME_SUCCESS",
    CREATE_GAME_FAILURE: "home/CREATE_GAME_FAILURE",
}

const INITIAL_STATE = {
    fetching: false,
}

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case types.CREATE_GAME_REQUEST:
        case types.GET_GAME_REQUEST:
            return {
                ...state,
                fetching: true,
            }
        default:
            return state;
    }
}

export const actions = {
    getGameRequest: (code, region, formikBag) => ({
        type: types.GET_GAME_REQUEST,
        code,
        region,
        formikBag
    }),
    createGameRequest: (code, region, formikBag) => ({
        type: types.CREATE_GAME_REQUEST,
        code,
        region,
        formikBag
    }),
}

export const selectors = {
    getFetching: ({ home }) => home.fetching,
}