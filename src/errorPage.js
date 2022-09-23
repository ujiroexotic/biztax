import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image404 from './Images/404.jpg';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
                <Col className='p-5'>
                <div className='error-image'>
                        
                                <img src={Image404} alt="404" className="image-fluid p-3" width={600} />
                           
                </div>

                </Col>
                <Col className='p-5'>
                    <div className='error-text'>
                    <h3>Page Not Found</h3>
                    <p>We are sorry for the page you requested <br /> could not be found please <br /> go back to the home page</p>

                    <Link to="/">
                        <Button variant='primary' > Go Home</Button>
                    </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ErrorPage;