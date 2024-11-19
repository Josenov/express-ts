import { Router } from "express";
import { checkJwt } from "../middlewares/session.middleware";
import multerMiddleware from "../middlewares/multer.middleware";
import { getFile } from "../controllers/upload";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single('myFiles'), getFile)

export {router}