
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import paystack from './Images/paystack.png';
import verve from './Images/verve.jpg';
import mastercard from './Images/mastercard1.png';

const CardsComponent = () => {
  return (
    <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
      <h3 className='patner-title'>OUR PARTNERS</h3>
      <div className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
      <div className='partner-card' xs={6} md={4} lg={3}>
      <CardGroup>
        <div className='pics-one'>
        {/* <Card className='pics-one'> */}
          <Card.Img src={paystack} />
          
        {/* </Card>  */}
        </div>
        <div className='pics-three'>
        {/* <Card className='pics-three'> */}
          <Card.Img src={mastercard}/>
          
        {/* </Card> */}
        </div>
        <div className='pics-two'>
        {/* <Card className='pics-two'> */}
          <Card.Img  src={verve} />
          
        {/* </Card> */}
        </div>

      </CardGroup>
      </div>
      </div>

    </div>
  );
}

export default CardsComponent;