
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";

const DeductionComponent = () => {
    return ( 
        <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
                            <h5 className="deduction-h5">
                    DEDUCTIONS (TAX RELIEFS)
                </h5>

            <button type="submit" className="calcu-buttons">
                           STATUTORY RELIEFS
                    </button>


                    <div className='income-buttin'>
                    <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button variant="light" className="deduction-button">
                           <p>CONSOLIDATED RELIEF ALLOWANCE <br />
                           (1% of Gross income or #200,000 + 20% of 
                             earned income)

                           </p>
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='deduction-input'/>
            </Col>
            </Row>
                    </div>
                    <div className='income-buttin'>
                    <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button  className="deduction-button">
                           <p>
                            TOTAL NON-TAXABLE INCOME
                           </p>
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='deduction-input'/>
            </Col>
            </Row>
                    </div>

                    <button  type="submit" className="calcu-buttons">
                           TAXABLE INCOME
                    </button>

                    <div className='income-buttin'>
                    <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button  className="income-buttons">
                           <h5>
                            TOTAL NON-TAXABLE INCOME
                           </h5>
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='income-input'/>
            </Col>
            </Row>
                    </div>  

                    <div>
                        <button className='button-tax'>CALCULATE TAX</button>
                    </div>

                    <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button  className="income-buttons">
                            <p>
                                TOTAL ANNUAL TAX PAYABLE
                            </p>
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='income-input'/>
            </Col>
            </Row>
            </div>
                    <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button  className="income-buttons">
                            <p>
                                WITHHOLDING TAX
                            </p>
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='income-input'/>
            </Col>
            </Row>
            </div>
                    <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button  className="income-buttons">
                            <p>
                                ANNUAL TAX DUE
                            </p>
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='income-input'/>
            </Col>
            </Row>
            </div>

            <div>
                <h5>Click on any of the payment channels to make your online payment</h5>

                <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
        
            <button  className="income-buttonsS">
                            <p>
                                REMITA
                            </p>
                    </button> <br />
                    
                    </Row>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
        
            <button  className="income-buttonsS">
                            <p>
                                INTERSWITCH
                            </p>
                    </button> <br />
                    
                    </Row>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
        
            <button  className="income-buttonsS">
                            <p>
                                NIBSS
                            </p>
                    </button> <br />
                    
                    </Row>
                    </div>
            </div>
            {/* <Link to="/maleWears"> */}
            
                <Nav.Link href="/success">
                    <div>
                        <button className='button-tax' type="submit">PAY TAX</button>
                    </div>
                </Nav.Link>
        </div>

        
     );
}
 
export default DeductionComponent;