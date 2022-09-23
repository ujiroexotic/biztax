// import Card from 'react-bootstrap/Card';
import Bridge from './Images/bridge.jpg';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';


// import Logo from './Images/logo.jpeg'

const CardComponent = () => {
    return (
        <div className='card-page'>
            
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
                    
                    <Col >
                        <div className='card-text'>
                        <h3 className='card-title'>
                        ABOUT US
                          </h3>

                       <p className='card-body'>Biztax is a tax management system that redefines how 
                    <br />
                      businesses can manage and pay their taxes. We use our
                    <br />
                     patented technology to allow you to bypass the current
                     <br />
                     manual process and mange your taxes on an online plat-
                     <br />
                     form. This allows for increased accoutability, document 
                        <br />
                     storage and to enable communication between the busi-
                     <br />
                and the government.    
                 </p>  
                 
                          
                          
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <Image src={Bridge}  width="200px"/>
                        </div>
                    
                 </Col>
                 </Row>


        </div>
    );
}

export default CardComponent;




