import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../Header';
import TableDatas from '../TableDatas';
import TrackingContext from '../../Context/Context';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import "./index.css"
import CourierDetails from '../CourierDetails';
function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function TrackingDetails() {
    const data={
        name:"sriram",
        contact:"9087",
        email:"abc@email.com",
        address:"Trichy"
    }
    const [num,setNum]=useState('')
    const [resdata,setData]=useState({senderDetails:null,receiverDetails:null,trackingdetails:null})
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.post("http://localhost:3001/getcurrentstatus",{trackingNumber:num});
          setData(res.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, [num]);
    console.log(resdata.trackingdetails)
  return (
    <TrackingContext.Consumer>
    {value=>{
      const {TrackingNumber}=value
      setNum(TrackingNumber)
      return(
        <div> 
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 mt-5'>
                   {resdata.senderDetails!==null   && <TableDatas who={"Sender's"} data={resdata.senderDetails}/>}
                </div>
                <div  className='col-12 col-md-6 mt-5'>
                   {resdata.receiverDetails!==null && <TableDatas who={"Receiver's"} data={resdata.receiverDetails}/>}
                </div>
                {resdata.trackingdetails!==null && <CourierDetails data={resdata.trackingdetails}/>}
                {resdata.receiverDetails===null && <h1>Oops!!No Data Found</h1>}
                
            </div>
        </div>
    </div>
      )
    }}
    </TrackingContext.Consumer>
    

  );
}
