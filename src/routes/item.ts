import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log.middleware";

const router = Router()

/**
 * http://localhost:3000/items [GET]
 */

router.get('/', getItems)

router.get('/:id',logMiddleware, getItem)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

export {router};