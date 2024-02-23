import Header from "../Header"
import "./index.css"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import TrackingContext from "../../Context/Context"
const Home=()=>
{
  const history=useHistory()
 const [curr,setInput]=useState('')

 const onInputChange=(e)=>
 {
  setInput(e.target.value)
 }



  return(
    <TrackingContext.Consumer>
    {value=>{
      const {changeTracking}=value
      const showTrackingDetails=()=>
      {
        changeTracking(curr)
        history.replace("/tracking-details")
      }
      return(
        <div>
        <Header/>
        <div className="Home-bg">
            <div className="home-body-con">
            <img className="home-del-img" src="https://www.dropoff.com/wp-content/uploads/2022/04/Ultimate-Guide-to-Last-Mile-Delivery-Tracking-01-1024x600.jpg" />
            <div>
                <h1 className="body-head">Enter Your Tracking Number</h1>
            <div>
            <input className="InputBox" onChange={onInputChange} placeholder="Enter the Tracking Number"/>
            <button onClick={showTrackingDetails} className="searchBtn">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            </div>
            </div>
            </div>
        </div>
        </div>
      ) 
    }}
    </TrackingContext.Consumer>
   
  )
}
export default Home

