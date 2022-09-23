import OverlayComponent from "./overlayComponent";
import Bridge from './Images/taxs.jpg';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';
import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import Button from 'react-bootstrap/esm/Button';
import IncomeComponent from "./incomeComponent";
import PaymentComponent from "./paymentComponent";
import DeductionComponent from "./deductionComponent";
// import FormLabel from '@mui/material/FormLabel';

const CalculatorComponent = () => {
    return (
        <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <OverlayComponent />
            <div className="calcu-row">
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
                    
                    <Col >
                        <div className='calcu-text'>
                        <h3 className='calcu-title'>
                        Tax Payment
                          </h3>

                       <p className='calcu-body'>Welcome to the Payment session. 
                    <br />
                      Here you can select the type of tax you want 
                    <br />
                    to pay, calculate your tax accurately
                     <br />
                     and secure any of our secure payment
                     <br />
                     channels. 
                        <br />
                     
                     <br />
                    The Live Bot is set to take your questions.   
                 </p>  
                 
                          
                          
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <Image src={Bridge}  width="600px" height="450px"/>
                        </div>
                    
                 </Col>
                 </Row>
                 </div>

                    <div>
                        <PaymentComponent />
                    </div>
            
                    <div>
                    
                    <IncomeComponent />
                    </div>
                    
            
                  <DeductionComponent />
        </div>
    );
}

export default CalculatorComponent;