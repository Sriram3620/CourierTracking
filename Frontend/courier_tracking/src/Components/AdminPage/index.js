import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../Header';
import AdminEnterForm from '../AdminPageForm';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./index.css"
import Cookie from 'js-cookie'
import { Redirect,Route,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AddTrackingForm from '../AdminAddTrackingForm';
function Admin() {
  const history=useHistory()
  const token = Cookie.get('jwt_token')
  const AdminUser=Cookie.get('user')
  const checkAdmin=AdminUser==="osriram4@gmail.com"
  
  if(checkAdmin===false)
  {
    history.replace("/")
  }

    const [trackingData,setTrackingData]=useState([])
   useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3001/trackingdetails");
        setTrackingData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
 
  return (
    <div>
        <Header/>
        <div className='container-fluid p-5'>
            <div className='row'>
            <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="home" title="ADD">
                <AdminEnterForm/>
            </Tab>

            <Tab eventKey="profile" title="Update">
              <div className="table-alignment mt-4 ml-5 mr-5">
                <table className="table  caption-top table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Tracking ID</th>
                      <th scope="col">Parcel Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.map((each)=>(
                       <tr>
                       <th scope="row">{each.trackingNumber}</th>
                       <td>{each.status}</td>
                       <td type="button" className="updatebtn">Update</td>
                     </tr>
                    ))}
                    
                    
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Delete">
            <div className="table-alignment mt-4 ml-5 mr-5">
                <table className="table  caption-top table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Tracking ID</th>
                      <th scope="col">Parcel Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.map((each)=>(
                       <tr>
                       <th scope="row">{each.trackingNumber}</th>
                       <td>{each.status}</td>
                       <td type="button" className="updatebtn">Delete</td>
                     </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="contact" title="AddTrackingDetails" >
                <AddTrackingForm/>
            </Tab>
            </Tabs>
            </div>
        </div>
    </div>
  );
}

export default Admin;