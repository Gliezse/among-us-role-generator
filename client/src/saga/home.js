import { takeLatest, call, put } from "redux-saga/effects";

import * as homeApi from "middleware/home";
import { replace, push } from "react-router-redux";
import { types } from "reducer/home";
import { actions as gameActions } from "reducer/game";

export default [
    takeLatest(types.GET_GAME_REQUEST, joinGame),
    takeLatest(types.CREATE_GAME_REQUEST, createGame),
]

function* joinGame({ code, region, formikBag }) {
    const response = yield call(homeApi.getGame, code, region.id);

    if (response.status != 200) {
        formikBag.setErrors({ code: response.data.error })
    } else {
        const { game, role, canEnd } = response.data;
        yield put(gameActions.enterGame(game, role, canEnd));
        yield put(push("/game"))
    }

    formikBag.setSubmitting(false)
}

function* createGame({ code, region, formikBag }) {
    const response = yield call(homeApi.createGame, code, region.id);

    if (response.status != 200) {
        formikBag.setErrors({ code: response.data.error })
    } else {
        const { game, role, canEnd } = response.data;
        yield put(gameActions.enterGame(game, role, canEnd));
        yield put(push("/game"));
    }

    formikBag.setSubmitting(false)
}