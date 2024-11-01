import express, { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import { buscarUsuariosQuery, buscarUsuario, itemProdutos } from './controladores'
import { middleware, middlewareGeneral } from './intermediarios'

const app = express()

app.use(middlewareGeneral)

app.get('/produtos/:item', middleware, itemProdutos )

app.get('/usuarios/:email', buscarUsuario )

app.get('/usuarios', buscarUsuariosQuery )

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor ONLINE')
})