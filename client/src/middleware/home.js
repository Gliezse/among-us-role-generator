
import * as api from "middleware/api";

export const getGame = (code, region) => 
    api.postRequest("getGame", { code, region })
    
export const createGame = (code, region) => 
    api.postRequest("createGame", { code, region })