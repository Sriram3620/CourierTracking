import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./index.css"
import Cookie from 'js-cookie'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LogOutBtn from '../LogoutBtn';
function Header() {
    const token = Cookie.get('jwt_token')
    const AdminUser=Cookie.get('user')
    const checkAdmin=AdminUser==="osriram4@gmail.com"
   
     
  return (
    // <Navbar collapseOnSelect expand="lg" className="Header-con">
    //   <Container>
       
    //     <Navbar.Brand >
    //         <div>
    //         <img className='Logo-img' src="https://image.freepik.com/free-vector/isometric-online-delivery-tracking-application-illustration_80802-390.jpg" />
    //         <span className='logoName text-white'>SR-Tracking</span>
    //         </div>
    //         </Navbar.Brand>
    //     <span aria-controls="responsive-navbar-nav" ><i class="fa-solid fa-bars"></i></span>
    //     <Navbar.Collapse  id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //        {checkAdmin && <Nav.Link ><span className='Admin'>Admin</span></Nav.Link>}
            
    //       </Nav>
    //       <Nav>
    //         <Nav.Link><span className='Home-text'>Home</span></Nav.Link>
    //         <Nav.Link eventKey={2} >
    //          <LogOutBtn/>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav class="navbar navbar-expand-lg Header-con p-2 shadow">
  <a class="navbar-brand" >
  <div>
            <img className='Logo-img' src="https://image.freepik.com/free-vector/isometric-online-delivery-tracking-application-illustration_80802-390.jpg" />
            <span className='logoName text-white'>SR-Tracking</span></div>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon text-white"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <Link to="/">
      <li class="nav-item active Home-text">
        <a className="Home-text" >Home <span class="sr-only">(current)</span></a>
      </li>
      </Link>
      <Link to="/admin">
     {checkAdmin && (<li class="nav-item Home-text">
        <a className=" Home-text">Admin</a>
      </li>)}
      </Link>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <LogOutBtn/>
    </form>
  </div>
</nav>
  );
}

export default Header;