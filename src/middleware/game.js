
import * as api from "middleware/api";

export const resetGame = (code, region) => 
    api.postRequest("resetGame", { code, region })

export const status = (code, region) =>
    api.postRequest("getStatus", { code, region })
    