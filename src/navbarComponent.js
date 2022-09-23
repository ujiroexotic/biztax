import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Images/logo.jpeg'
import Image from 'react-bootstrap/Image';

const NavbarComponent = () => {
    const styleNav = {
        marginLeft: '250px',
        padding : '10px'
        
        
    }

    return (  
        <div className='nav-items'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Image src={Logo} className='navHead' />
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={styleNav} >
            {/* <Nav.Link href="/clothings">Clothings</Nav.Link> */}
            <Nav.Link href="/" className='nav-links' >HOME</Nav.Link>
            <Nav.Link href="/about" className='nav-links'>ABOUT</Nav.Link>
            <Nav.Link href="/calculator" className='nav-links'>eCALCULATOR</Nav.Link>
            <Nav.Link href="/contact" className='nav-links'>CONTACTS</Nav.Link>
            <Nav.Link href="/login" className='nav-links'>LOGIN</Nav.Link>
            <Nav.Link href="/signin" className='nav-links'>SIGN-UP</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="/signIn">Sign Up</Nav.Link>
            <Nav.Link href="/shop">Shop Now</Nav.Link>
            <Nav.Link href="/logIn">User Account</Nav.Link> */}
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>

    </Navbar>

        </div>
    );
}
 
export default NavbarComponent;