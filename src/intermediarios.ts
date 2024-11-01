import { Request, Response, NextFunction } from 'express'

export const middleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log('Passei no middleware')
    
    if (req.params.item === 'output') {
        res.send('A requisição passou pelo middleware, antes de chegar no controlador')
        return
    }

    next()
}

export const middlewareGeneral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei no middleware general')

    next()
}