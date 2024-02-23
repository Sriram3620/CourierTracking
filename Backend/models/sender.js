const mongoose = require('mongoose');

const sender=new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    trackingNumber:String,
    address:String
  })

  const SenderModal=mongoose.model('senderdetails',sender)
  module.exports=SenderModal