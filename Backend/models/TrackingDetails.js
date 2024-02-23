const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  trackingNumber: String,
  status: String,
  location: String,
  EstimatedDelivery:String,
  DateOfOrdered:String
  // Add more fields as needed
});

const TrackingModal=mongoose.model('trackingdetails', trackingSchema);
module.exports =TrackingModal