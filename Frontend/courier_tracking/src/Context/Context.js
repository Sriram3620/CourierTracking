import React from "react";

const TrackingContext=React.createContext({
    TrackingNumber:'',
    changeTracking:()=>{}
})
export default TrackingContext