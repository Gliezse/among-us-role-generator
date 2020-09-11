import { all } from "redux-saga/effects"

import Home from "saga/home";

const sagas = [
    ...Home
]

export default function* rootSaga(){
    yield all(sagas)
};