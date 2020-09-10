
import * as api from "middleware/api";

export const getFacturas = () => 
    api.getRequest("facturas", {})