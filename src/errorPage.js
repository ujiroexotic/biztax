import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image404 from './Images/404.jpg';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Row>
                <Col className='p-5'>
                
                        
                                <img src={Image404} alt="404" className="image-fluid p-3" width={500} />
                           


                </Col>
                <Col className='p-5'>
                    <h3>Page Not Fond</h3>
                    <p>We are sorry for the page you requested <br /> could not be found please <br /> go back to the home page</p>

                    <Link to="/">
                        <Button variant='primary'> Go Home</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default ErrorPage;