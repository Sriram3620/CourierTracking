import React, { useState } from 'react';
import axios from 'axios';
import TrackingContext from '../../Context/Context';
const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post(`http://localhost:3001/getDetails`,{
            trackingNumber: trackingNumber}
            );
     console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  return (
    <TrackingContext.Consumer>
    {value=>
    {
      const {TrackingNumber}=value
      console.log(TrackingNumber)
      return(
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter Tracking Number"
          />
          <button type="submit">Track</button>
        </form>
        {trackingInfo && (
          <div>
            <h2>Tracking Information</h2>
            <p>Status: {trackingInfo.status}</p>
            <p>Location: {trackingInfo.location}</p>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
      )
    }}
    </TrackingContext.Consumer>
   
  );
};

export default TrackingForm;
