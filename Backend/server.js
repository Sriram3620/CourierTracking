const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const TrackingModal=require("./models/TrackingDetails")
const UserDetails=require("./models/Tracking")
const SenderModal=require("./models/sender")
const ReceiverModal=require("./models/Receiver")
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt');
const app=express()
const jwt=require("jsonwebtoken")
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/CourierTracking",{ useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get('/getdatas',async(req,res)=>
{ 
    UserModal.find({})
    .then(users=> res.json(users))
    .catch(err=>res.json(err))
})

app.post("/getDetails",async(req,res)=>
{
   const data=req.body;
   const {trackingNumber}=data
   const result=await UserModal.findOne({trackingNumber})   
   //console.log(result)
})



app.post("/users",async(req,res)=>
{
   const {name,email}=req.body;
   let {password}=req.body
    password=await bcrypt.hash(password,10);
    const checkUser=await UserDetails.findOne({email})
    if(checkUser===null)
    {
        const payload = {
            userMail: email,
          };
          const jwtToken = jwt.sign(payload, "SR_123");
          res.status(200);
          res.send({ jwtToken });
          const newData=await new UserDetails({name,password,email,jwtToken})
        const saved=await  newData.save()
    }
     else{
        res.send("userAlreadyExist")
     }
})

app.post("/login",async(req,res)=>
{
    const {email,password}=req.body
    const User=await UserDetails.findOne({email})
    if(User===null)
    {
        res.send("Invalid User");
    }
    else 
    {
      const isPasswordMatch=await bcrypt.compare(password,User.password)
      if(isPasswordMatch)
      {
        jwt.verify(User.jwtToken, "SR_123", async (error, payload) =>
        {
          if(error)
          {
            res.send("Invalid AccessToken")
          }
          else {
            res.send({Token:User.jwtToken,userName:payload.userMail})
          } 
        })
        
      }
      else 
      {
        res.send("Password is Incorrect")
      }
    }
})


app.post("/senderDetails",async(req,res)=>
{
  const data=req.body
  const {name,contact,email,trackingNumber,options,address}=data
  if(options==="sender")
  {
    const newData=await new SenderModal({name,contact,trackingNumber,email,address})
    const saved=await  newData.save()
    console.log(saved);
  }
  else{
    const newData=await new ReceiverModal({name,contact,trackingNumber,email,address})
    const saved=await  newData.save()
    console.log(saved);
  } 
})


app.post("/trackingdetails",async(req,res)=>
{
  const data=req.body
  const newData=await new TrackingModal(req.body)
  const saved=await  newData.save()
  console.log(saved);
})

app.post("/getcurrentstatus",async(req,res)=>
{
  const data=req.body
  const {trackingNumber}=data
  const senderDetails=await SenderModal.findOne({trackingNumber})
  const receiverDetasil=await ReceiverModal.findOne({trackingNumber})
  const trackingdetails=await TrackingModal.findOne({trackingNumber})
  console.log(trackingdetails)
  res.send({senderDetails:senderDetails,receiverDetails:receiverDetasil,trackingdetails:trackingdetails})
})


app.get("/trackingdetails",async(req,res)=>
{
  const num="ABC123456789"
  const data= await TrackingModal.find({})
   res.send(data)
})

app.post("/add",async(req,res)=>
{
    const data=req.body
    const newData=await new TrackingModal(req.body)
    const saved=await  newData.save()
    console.log(saved);
})

app.listen(3001,()=>{
    console.log("Server is Running");
})