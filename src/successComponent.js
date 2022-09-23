import Image from 'react-bootstrap/Image';
import Bridge from './Images/marks.jpg';


const SuccessComponent = () => {
    return ( 
        <div className="success-page">
            {/* <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}> */}
            <Image src={Bridge} className="success-imaage"/>
            {/* </Row> */}

            <h2>Payment Completed Successfully!</h2>
            <p>Thank you for Paying your taxes, it is your civic duty!</p>
        </div>

     );
}
 
export default SuccessComponent;