const express = require('express')
const app = express()
const port = 3000


const albuns = require("./albuns")
const gravadoras = require("./gravadoras")

app.get('/', (req, res) => {
res.send('àlbuns Musicais')
})



app.use('/albuns', albuns);
app.use('/gravadoras', gravadoras);




app.listen(port, () => {
    console.log(`Servidor em execução na porta: ${port}`)
    })