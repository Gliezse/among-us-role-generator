import { takeLatest, call, put } from "redux-saga/effects";

import * as homeApi from "middleware/home";
import { replace } from "react-router-redux";
import { types } from "reducer/home";

export default [
    takeLatest(types.JOIN_GAME_REQUEST, joinGame),
]

function* joinGame({ code, region, formikBag }) {
    const response = yield call(homeApi.joinGame, code, region.id);

    if (response.status != 200) {
        yield put(replace("/game"))
        formikBag.setErrors({ code: response.data.error })
    } else {
        yield put(replace("/game"))
    }

    formikBag.setSubmitting(false)
}