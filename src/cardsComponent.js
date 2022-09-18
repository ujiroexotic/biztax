
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import paystack from './Images/paystack.png';
import verve from './Images/verve.jpg';
import mastercard from './Images/mastercard1.png';

const CardsComponent = () => {
  return (
    <div  xs={6} md={4} lg={3}>
      <h3 className='patner-title'>OUR PARTNERS</h3>
      <div className='partner-card'>
      <CardGroup>
        <Card className='pics-one'>
          <Card.Img src={paystack} />
          
        </Card>
        <Card className='pics-three'>
          <Card.Img src={mastercard}/>
          
        </Card>
        <Card className='pics-two'>
          <Card.Img  src={verve} />
          
        </Card>

      </CardGroup>
      </div>

    </div>
  );
}

export default CardsComponent;