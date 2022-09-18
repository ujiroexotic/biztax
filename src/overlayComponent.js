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
        <div>

            <>
                <Button variant="outline" onClick={handleShow}>
                <Image src={menu}  width="50px" className='menu-icon'/>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='menu-page'>
                            <h4  className='menu-words'>Company Income Tax (CIT)</h4> <br />
                            <strong><hr></hr></strong>
                            <h4  className='menu-words'>Personal Income Tax (PIT)</h4><br />
                            <strong><hr></hr></strong>
                            <h4  className='menu-words'>WithholdingTax (WHT)</h4> <br />
                            <strong><hr></hr></strong> 
                            <h4  className='menu-words'>Value Added Tax (VAT)</h4> <br />
                            <strong><hr></hr></strong> 
                            <h4  className='menu-words'>Stamp Duty (SD)</h4> <br />
                            <strong><hr></hr></strong> 
                            <h4  className='menu-words'>Capital Gains Tax (CGT)</h4> <br />
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>

        </div>
    );
}

export default OverlayComponent;