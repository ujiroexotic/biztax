
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from 'react-bootstrap/esm/Button';

const PaymentComponent = () => {
    return ( 
        <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
            <h2 className="calcu-h1">
                    eCALCULATOR/PAYMENT
                </h2>




                <FormControl>
                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="PIT" control={<Radio />} label="PERSONAL INCOME TAX(PIT)" />
                        <FormControlLabel value="CIT" control={<Radio />} label="COMPANY INCOME TAX(CIT)" />
                        <FormControlLabel value="PPT" control={<Radio />} label="PETROLEUM PROFIT TAX(PPT)" />
                        {/* <FormControlLabel
                            value="disabled"
                            disabled
                            // control={<Radio />}
                            // label="other"
                        /> */}
                    </RadioGroup>
                </FormControl>
                </div>

                    <div>
                    <button  type="submit" className="calcu-buttons">
                            PERSONAL INCOME TAX  (PIT)
                    </button> <br />
                    <Button variant="light" type="submit" className="calcu-buttons">
                    <FormControl>
                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="PIT" control={<Radio />} label="EMPLOYED" />
                        <FormControlLabel value="CIT" control={<Radio />} label="SELF-EMPLOYED" />
                        <FormControlLabel value="PPT" control={<Radio />} label="PARTNERSHIP" />
                        {/* <FormControlLabel
                            value="disabled"
                            disabled
                            // control={<Radio />}
                            // label="other"
                        /> */}
                    </RadioGroup>
                </FormControl>
                    </Button> <br />
            </div>
        </div>
     );
}
 
export default PaymentComponent;