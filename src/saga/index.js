import { all } from "redux-saga/effects"

import Home from "saga/home";
import Game from "saga/game";

const sagas = [
    ...Home,
    ...Game
]

export default function* rootSaga(){
    yield all(sagas)
};