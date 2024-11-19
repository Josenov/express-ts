import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext.interface";



const getOrders = (req:RequestExt, res:Response)=> {
    try {
        res.send({
            data:'ESTO SOLO LO VEN PERSONAS CON SESION ACTIVA/JWT',
            user:req?.user
        })
    } catch (error) { 
        handleHttp(res, "ERROR_GET_BLOGS")
    }
}

export {getOrders}