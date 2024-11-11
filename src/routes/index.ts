import { Router } from "express";
import {readdirSync} from 'fs'


const PATH_ROUTER = `${__dirname}` //Devuelve la ruta del directorio actual
const router = Router();

const cleanFileName = (fileName:string)=>{
    const file = fileName.split('.').shift()
    return file
}


//funcion que se encargara de leer cuantos archivos se encuentran en cierto directorio
readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName = cleanFileName(fileName)
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Se esta cargando la ruta..../${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})


export {router}