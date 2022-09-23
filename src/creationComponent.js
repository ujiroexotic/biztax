import Bridge from './Images/deltalogo.png';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';

const CreationComponent = () => {
    return (  
        <div className='creation-page'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
                    
                    <Col >
                        <div className='creation-text'>

                       <p>Biz Tax is  Sponsored and created for the  Delta <br /> State  Government. </p>
                   
                 
                          
                          
                    </div>
                    </Col>
                    <Col >
                        <div className='p-3'>
                          <Image src={Bridge}  width="150px"/>
                        </div>
                    
                 </Col>
                 </Row>
        </div>
    );
}
 
export default CreationComponent;