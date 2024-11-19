import {  Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { registerFile } from "../services/storage.service";
import { RequestExt } from "../interfaces/req-ext.interface";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req:RequestExt, res:Response)=>{
    try {
        /* const {user, file} = req;
        console.log(file)
        const dataToRegister : Storage = {
            fileName:`${file?.filename}`,
            idUser:`${user?.id}`,
            path:`${file?.path}`
        }
        const response = await registerFile(dataToRegister) */
        res.send("AQUI_LLEGA_EL_ARCHIVO")
    } catch (error) {
        handleHttp(res, "ERROR_UPLOADING_FILE")
    }
}

export {getFile}