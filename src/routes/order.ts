import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middlewares/session.middleware";


const router = Router()

/**
 * Esta ruta la ven solo personas que tengan sesion activa
 */

router.get('/',checkJwt, getOrders)

export {router};