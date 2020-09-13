
import * as api from "middleware/api";

export const getGame = (code, region) => 
    api.postRequest("joinGame", { code, region })
    
export const createGame = (code, region) => 
    api.postRequest("createGame", { code, region })