import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
function AdminEnterForm() {
  const [validated, setValidated] = useState(false);
  const [data,setData]=useState({})
  const [name,setName]=useState('')
  const [contact,setContact]=useState('')
  const [email,setEmail]=useState('')
  const [select,setSelect]=useState('')
  const [tracking,setTracking]=useState('')
  const [city,setCity]=useState('')
  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
    else{
        event.preventDefault();
        const data={
            name:name,
            contact:contact,
            email:email,
            trackingNumber:tracking,
            options:select,
            address:city,
          }
        const res=await axios.post("http://localhost:3001/senderDetails",data)
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
  const TrackingChange=(e)=>
  {
    setTracking(e.target.value)
  }
  const onSelectChange=(e)=>
  {
    setSelect(e.target.value)
  }
  const onCityChange=(e)=>
  {
    setCity(e.target.value)
  }
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          onChange={NameChange}
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
         
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Contact</Form.Label>
          <Form.Control
          onChange={contactChange}
            required
            type="text"
            placeholder="Contact"
            defaultValue=""
          />
         
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
          onChange={EmailChange}
            required
            type="text"
            placeholder="Email"
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
      <Form.Group className='' as={Col} md="4" controlId="validationCustom01">
      <Form.Label>Send or Receive</Form.Label>
        <Form.Select onChange={onSelectChange} aria-label="Default select example">
      <option value="sender">Sender's Details</option>
      <option value="Receiver">Receiver's Details</option>
    </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={onCityChange} type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
     
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default AdminEnterForm;