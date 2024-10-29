import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/', (req: any, res: any) => {
    res.send('Salve Joia!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor ONLINE')
})