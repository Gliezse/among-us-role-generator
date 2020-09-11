
import * as api from "middleware/api";

export const joinGame = (code, region) => 
    api.postRequest("joinGame", { code, region })