import Button from 'react-bootstrap/esm/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import React, { useState } from 'react';



function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }


const IncomeComponent = () => {
//     const inputProps = useInput();

    return ( 
        <div>
            <button  type="submit" className="calcu-buttons">
                            PART A -INCOME
                    </button> <br />

            <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button className="income-button">
                            EARNED INCOME
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='income-input' onChange={useInput}/>
            </Col>
            </Row>
            </div>
            <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button className="income-button">
                            UNEARNED INCOME
                    </button> <br />
            
            </Col>
            <Col>
             <input type="text" value="" className='income-input' onChange={useInput}/>
            </Col>
            </Row>
            </div>
            <div className='income-buttin'>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <Col>
            <button  className="income-button">
                            GROSS ANNUAL INCOME
                    </button> <br />
            
            </Col>
            <Col>
            <label htmlFor="" value="0" className='income-input'></label>
             {/* <input type="text" value="" className='income-input'/> */}
            </Col>
            </Row>
            </div>
            <Button variant="info" type='submit' className='empty-button'></Button>
        </div>
     );
}
 
export default IncomeComponent;