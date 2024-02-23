const mongoose = require('mongoose');

const receiver=new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    trackingNumber:String,
    address:String
  })
  
  
const ReceiverModal=mongoose.model('receiverdetails',receiver)

module.exports=ReceiverModal
