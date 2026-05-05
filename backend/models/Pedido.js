
import mongoose from 'mongoose';
export default mongoose.model('Pedido', new mongoose.Schema({producto:Object,metodoPago:String,estado:String,fecha:{type:Date,default:Date.now}}));
