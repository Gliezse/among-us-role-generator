import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import { types, actions, selectors } from "reducer/game";
import * as gameApi from "middleware/game";
import * as homeApi from "middleware/home";

export default [
    takeLatest(types.RESET_GAME_REQUEST, reset),
    takeLatest(types.START_STATUS_CHECK, startCheck),
]


function* reset() {
    const code = yield select(selectors.getCode);
    const region = yield select(selectors.getRegion);
    const canEnd = yield select(selectors.getCanEnd);

    let response;

    if (canEnd) {
        response = yield call(gameApi.resetGame, code, region);
    } else {
        response = yield call(homeApi.getGame, code, region)
    }

    if (response.status === 200) {
        const { game, role, canEnd } = response.data;
        yield put(actions.enterGame(game, role, canEnd));
    }
}

function* startCheck() {
    let shouldCheck = yield select(selectors.getShouldCheck);
    const code = yield select(selectors.getCode);
    const region = yield select(selectors.getRegion);

    while (shouldCheck) {
        const response = yield call(gameApi.status, code, region);
        if (response.status != 200) {
            shouldCheck = false;
            break;
        } else if (response.data.status === "restarted") {
            yield put(actions.gameEnded());
            shouldCheck = false;
            break;
        }
        
        shouldCheck = yield select(selectors.getShouldCheck);
        yield delay(2000)
    }

    yield put(actions.stopStatusCheck());
}
