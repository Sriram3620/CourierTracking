import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
function AddTrackingForm() {
  const [validated, setValidated] = useState(false);
  const [data,setData]=useState({})
  const [name,setName]=useState('')
  const [contact,setContact]=useState('')
  const [email,setEmail]=useState('')
  const [select,setSelect]=useState('')
  const [tracking,setTracking]=useState('')
  const [orderDate,setOrderDate]=useState('')
  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
    else{
        event.preventDefault();
        const data={
            status:name,
            location:contact,
            trackingNumber:tracking,
            EstimatedDelivery:email,
            DateOfOrdered:orderDate,
          }
          console.log(data)
        const res=await axios.post("http://localhost:3001/trackingdetails",data)
    }

    setValidated(true);
  };

  const NameChange=(event)=>
  {
      setName(event.target.value)
  }
  const contactChange=(e)=>
  {
     setContact(e.target.value);
  }
  const EmailChange=(e)=>
  {
    setEmail(e.target.value)
  }
  const orderChange=(e)=>
  {
    setOrderDate(e.target.value)
  }
  const TrackingChange=(e)=>
  {
    setTracking(e.target.value)
  }
  
 
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Status</Form.Label>
          <Form.Control 
          onChange={NameChange}
            required
            type="text"
            placeholder="status"
            defaultValue=""
          />
         
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Location</Form.Label>
          <Form.Control
          onChange={contactChange}
            required
            type="text"
            placeholder="location"
            defaultValue=""
          />
         
        </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Tracking Number</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={TrackingChange}
            placeholder="TrackingNumber"
            defaultValue=""
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>DeliveryDate</Form.Label>
          <Form.Control
          onChange={EmailChange}
            required
            type="date"
            placeholder="DeleveriyDate"
            defaultValue=""
          />

        </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>OrderDate</Form.Label>
          <Form.Control
          onChange={orderChange}
            required
            type="date"
            placeholder="DeleveriyDate"
            defaultValue=""
          />

        </Form.Group>
      </Row>

      
     
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default AddTrackingForm;