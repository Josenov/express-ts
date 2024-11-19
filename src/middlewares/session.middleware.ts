import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext.interface";



const checkJwt = (req: RequestExt, res:Response, next: NextFunction)=>{
    try {
        
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop() 
        const isUser = verifyToken(`${jwt}`) as {id:string}
        
        if(!isUser){
            res.status(401)
            res.send("NO_TIENES_UNA_SESION_ACTIVA")
        } else {
            req.user = isUser
            console.log({jwtByUser})
            next()
        }
        
        




    } catch (error) {
        res.status(400),
        res.send("SESSION_NOT_VALIDATED")
    }
}

export {checkJwt}

