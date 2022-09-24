import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



const handleInput = (e) => {
  e.persist();
}
const Contactus = () => {

    
 

  
  
    
  
  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12}>
        <h2 className='text-center mb-4 font-bold'><strong>CONTACT US</strong></h2>
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
          <Card.Body>
            <Form >
              <Form.Group  className="mb-3 " controlId="formBasicEmail">

                <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label><strong>First Name</strong></Form.Label>
          <Form.Control  
          style={{
              border: 'solid',
              borderWidth: '1px',
              borderRadius: '0px'
              }}  
              type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label><strong>Last Name</strong></Form.Label>
          <Form.Control
          style={{
            border: 'solid',
            borderWidth: '1px',
            borderRadius: '0px'
            }}
          type="text" />
        </Form.Group>
      </Row>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control
                style={{
                  border: 'solid',
                  borderWidth: '1px',
                  borderRadius: '0px'
                  }}
                type="email" 
                name="email"  onChange={handleInput} />
                 <Form.Text className="text-danger">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label><strong>Message</strong></Form.Label>
             <Form.Control
             style={{
              border: 'solid',
              borderWidth: '1px',
              borderRadius: '0px'
              }}
             as="textarea" rows={3} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><strong>Additional Details</strong></Form.Label>
        <Form.Control
        style={{
          border: 'solid',
          borderWidth: '1px',
          borderRadius: '0px'
          }}
        as="textarea" rows={3} />
         </Form.Group>
             <br/>
        <div  style={{
           border: 'hidden',
          borderWidth: '1px',
          borderRadius: '0px',
          backgroundColor: '#145CA4'
          }} className="d-grid gap-2 ">
      <Button className= 'backgroundColor="#145CA4"  size="lg" type="submit"'>
        Send Message
      </Button>
      </div>
              
            </Form>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Contactus;