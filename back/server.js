const express=require('express')
const cors=require("cors")
const app=express()
const rotas=require('./email')
app.use(cors())
app.use(express.json())
app.use(rotas)
app.listen(3333,()=>{
console.log("Listening on port 3333")
})