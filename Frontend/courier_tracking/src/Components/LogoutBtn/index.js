import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Cookies from 'js-cookie'
import {useHistory } from 'react-router-dom';
function LogOutBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const Logout=()=>
  {
    Cookies.remove('jwt_token')
    Cookies.remove('user')
     history.replace("/login");
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Logout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p>Are you sure to Logout?</p>
        </Modal.Header>
          <div className='logout-con'>
          <Button className='confirm-btn' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='confirm-btn' variant="primary" onClick={Logout}>
           Confirm
          </Button>
          </div>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogOutBtn;
