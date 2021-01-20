
const express=require("express")
const {Routes}=require('express')
const routes=express.Router()
const email=require('./userEmail')
routes.post('/email',email.index);
module.exports=routes;