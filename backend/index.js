
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pedido from './models/Pedido.js';
const app=express();
app.use(cors()); app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/tienda_camisas');
app.post('/pedido', async(req,res)=>{await new Pedido(req.body).save();res.json({ok:true});});
app.listen(4000,()=>console.log('Backend OK'));
