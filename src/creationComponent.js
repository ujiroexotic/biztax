import Bridge from './Images/deltalogo.png';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';

const CreationComponent = () => {
    return (  
        <div className='principle-page'>
            <Row className='container-fluid mt-5 mb-5'>
                    
                    <Col xs={6} md={4} lg={3}>
                        <div className='creation-text'>

                       <p>Biz Tax is  Sponsored and created for the <br /> Delta State Government. </p>
                   
                 
                          
                          
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <Image src={Bridge}  width="150px"/>
                        </div>
                    
                 </Col>
                 </Row>
        </div>
    );
}
 
export default CreationComponent;