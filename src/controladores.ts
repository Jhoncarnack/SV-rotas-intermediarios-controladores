import { Request, Response } from 'express'

const pessoas = [
    { nome: 'João', email: 'jhon@gmail.com' },
    { nome: 'Maria', email: 'maria@gmail.com' },
    { nome: 'Pedro', email: 'pedro@gmail.com' }
]

export const itemProdutos = (req: any, res: any) => {
    console.log(req.params.item)
    return res.send('To no controlador!')
}

export const buscarUsuario = (req: any, res: any) => {
    const { email } = req.params

    const pessoa = pessoas.find((item) => {
        return item.email === email
    })

    if (!pessoa) {
        return res.send('Usuário não encontrado')
    }

    return res.send(pessoa)
}

export const buscarUsuariosQuery = (req: any, res: any) => {
    const { email } = req.query

    if (!email) {
        return res.send('E-mail não informado')
    }

    const pessoa = pessoas.find((item) => {
        return item.email === email
    })

    if (!pessoa) {
        return res.send('Usuário não encontrado')
    }

    return res.send(pessoa)
}