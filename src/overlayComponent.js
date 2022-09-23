import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import menu from './Images/menu.jpg';

const OverlayComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    return (
        <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>

            {/* <> */}
                <Button variant="outline" onClick={handleShow}>
                <Image src={menu}  width="50px" className='menu-icon'/>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='menu-page'>
                            <Button variant="primary" type="submit" className="menu-words">
                            Companies Income Taxes (CIT)
                          </Button>
                          <strong className='lines'><hr></hr></strong>
                          <Button variant="primary" type="submit" className="menu-words">
                            Value Added Tax (VAT)
                          </Button>
                          <strong className='lines'><hr></hr></strong>
                          <Button variant="primary" type="submit" className="menu-words">
                            Withholding Tax (WIT)
                          </Button>
                          <strong className='lines'><hr></hr></strong>
                          <Button variant="primary" type="submit" className="menu-words">
                            Petroleum Profit Tax (PPT)
                          </Button>
                          <strong className='lines'><hr></hr></strong>
                          <Button variant="primary" type="submit" className="menu-words">
                            Personal Income Tax (PIT)
                          </Button>
                          
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            {/* </> */}

        </div>
    );
}

export default OverlayComponent;