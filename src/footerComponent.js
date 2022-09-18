import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'


// import { Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import Logo from './Images/logo.jpeg'
import Image from 'react-bootstrap/Image'; 
import facebook from './Images/facebuk.jpg'
import twitter from './Images/twitter.jpg'
import instagram from './Images/instagram1.jpg'
import arrow from './Images/arrow.jpg'




const FooterComponent = () => {
    return ( 
        <div>
            <footer className="footer" >
            <Row className='container-fluid mt-5 mb-5'>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <Image src={Logo} className='navhead' />
                          <p className="footer-text">lets make Tax not Taxing</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          {/* <Link to={'/about'}> */}
                          <Nav.Link href="/about">
                          <h3 className="text-light">
                            TAX CATEGORIES
                          </h3>
                          </Nav.Link>
                          {/* </Link> */}
                          <div >
                          <Button variant="primary" type="submit" className="footer-buttons">
                            Companies Income Taxes (CIT)
                          </Button>
                          <Button variant="primary" type="submit" className="footer-buttons">
                            Value Added Tax (VAT)
                          </Button>
                          <Button variant="primary" type="submit" className="footer-buttons">
                            Withholding Tax (WIT)
                          </Button>
                          <Button variant="primary" type="submit" className="footer-buttons">
                            Petroleum Profit Tax (PPT)
                          </Button>
                          <Button variant="primary" type="submit" className="footer-buttons">
                            Personal Income Tax (PIT)
                          </Button>
                          </div>
                          {/* <Image src={whatsapp} className='navHead' width="250px"/> */}
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                           <h3 className="text-light">
                             NEWSLETTER
                           </h3>
                          <p className="text-light">
                            SIgn up for our mailing list to <br /> get latest updates. 
                          </p> <br />
                          <div className="footer-placeholder"> <Form.Control type="email" placeholder="Enter email" />
                         <Button variant='outline'><Image src={arrow} className='facebook-icon' /></Button>
                          </div>
                        </div>
                        <div><Button variant='outline'><Image src={facebook} className='facebook-icons' /></Button>
                        <Button variant='outline'><Image src={twitter} className='facebook-icons' /></Button>
                        <Button variant='outline'><Image src={instagram} className='facebook-icons' /></Button>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <h3 className="text-light">
                            LEGAL
                          </h3>
                          <ul className="footer-lists">
                            <li>
                              Terms and Conitions
                            </li>
                            <li></li>
                            <li>
                              Privacy Policy
                            </li>
                            <li></li>
                            <li>
                              Customer Support Guide
                            </li>
                            <li></li>
                            <li>
                              Settlement and Reconciliation Guide
                            </li>
                          </ul>
                          
                          
                        </div>
                    </Col>
            </Row>
        </footer>
        </div>
     );
}
 
export default FooterComponent;