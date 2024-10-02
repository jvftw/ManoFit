const express = require('express');
const cors = require('cors');
const RoutesUsuario = require('./routes/RoutesUsuario')
const app = express()
const porta=8080;

app.use(cors());
app.use(express.json())
app.use('/',RoutesUsuario)
app.listen(porta,()=>{
    console.log("servidor iniciado com sucesso na porta ",porta)
})