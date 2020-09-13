export const types = {
    ENTER_GAME: "game/ENTER_GAME",
    RESET_GAME_REQUEST: "game/RESET_GAME_REQUEST",
    RESET_GAME_FAILURE: "game/RESET_GAME_FAILURE",
    RESET_GAME_SUCCESS: "game/RESET_GAME_SUCCESS",
    CLEAN_GAME: "game/CLEAN_GAME",
    START_STATUS_CHECK: "game/START_STATUS_CHECK",
    STOP_STATUS_CHECK: "game/STOP_STATUS_CHECK",
    GAME_ENDED: "game/GAME_ENEDED",
}

const INITIAL_STATE = {
    code: null,
    region: null,
    role: null,
    canEnd: false,
    fetching: false,
    shouldCheckStatus: false,
    gameEnded: false,
}

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case types.ENTER_GAME:
        case types.RESET_GAME_SUCCESS:
            return {
                ...action.game,
                role: action.role,
                canEnd: action.canEnd,
                fetching: false,
                gameEnded: false,
            };
        case types.RESET_GAME_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.RESET_GAME_FAILURE:
            return {
                ...state,
                fetching: false
            }
        case types.CLEAN_GAME:
            return INITIAL_STATE;
        case types.START_STATUS_CHECK:
            return {
                ...state,
                shouldCheckStatus: true,
            }
        case types.STOP_STATUS_CHECK:
            return {
                ...state,
                shouldCheckStatus: false,
            }
        case types.GAME_ENDED:
            return {
                ...state,
                gameEnded: true,
            }
        default:
            return state;
    }
}

export const actions = {
    enterGame: (game, role, canEnd) => ({
        type: types.ENTER_GAME,
        game,
        role,
        canEnd
    }),
    resetGame: () => ({
        type: types.RESET_GAME_REQUEST,
    }),
    startStatusCheck: () => ({
        type: types.START_STATUS_CHECK
    }),
    stopStatusCheck: () => ({
        type: types.STOP_STATUS_CHECK
    }),
    gameEnded: () => ({
        type: types.GAME_ENDED,
    }),
}

export const selectors = {
    getCode: ({ game }) => game.code,
    getRegion: ({ game }) => game.region,
    getRole: ({ game }) => game.role,
    getCanEnd: ({ game }) => game.canEnd,
    getFetching: ({ game }) => game.fetching,
    getShouldCheck: ({ game }) => game.shouldCheckStatus,
    getGameEnded: ({ game }) => game.gameEnded,
}