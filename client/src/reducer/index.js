import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import home from "reducer/home";
import game from "reducer/game";

export default (history) => combineReducers({
    router: connectRouter(history),
    home,
    game,
});