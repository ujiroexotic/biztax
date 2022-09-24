import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import google from './Images/google.png';
import api from './api';

const Signup = () => {

   
    const [SignupDetails, setSignupDetails] = useState({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      companyName: "",
      companyRegNo: "",
      password: "",
            error_list: []
          
    });

  
    const handleInput = (e) => {
      e.persist();
      setSignupDetails({
        ...SignupDetails, [e.target.name] : e.target.value
      })
        // console.log(SignupDetails)

    }
  
    const history = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        firstName: SignupDetails.firstName,
        lastName: SignupDetails.lastName,
        email: SignupDetails.email,
        city: SignupDetails.city,
        companyName: SignupDetails.companyName,
        companyRegNo: SignupDetails.companyRegNo,
        password: SignupDetails.password


      }
      const Signup = async () => {
        try {

          console.log(data);
           const response = await api.post('/adduser', {
            firstName: data.firstName,
             lastName: data.lastName,
              email:  data.email,
              city:  data.city,
              companyName: data.companyName,
              companyRegNo: data.companyRegNo,
              password: data.password,
          })
          if(response.data.newUser){
            //  console.log(response.data)
            //  console.log(data)
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('username', response.data.newUser);
              swal("Success", response.data.message, "success")
              history.push('/login')
            }
            else{
              // setSignupDetails({
              //   // ...SignupDetails, error_list: response.data.validation_errors;
               
              // })
              console.log('error here')
            }

          
   
        } catch (error) {
          console.log(error);
         
        }
      }
      Signup();
     
    }
  return (
    <Container>
      <h3 className='text-center mb-4 font-bold'>Welcome Deltan</h3>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group 
        style={{
          backgroundColor: '#D9D9D9', 
          borderRadius: '200px',
          border: 'none!important',
          outline: 'none!important',
          height: '60px',
          borderWidth: "0px",
          width: '80%'
          }}
          className="mb-3 d-flex mx-auto"
          controlId="formGridGoogle">
        <InputGroup.Text
        style={{
          backgroundColor: 'transparent', 
          }}
           id="basic-addon1"><img width="48px" height="48px" src={google} alt="" /></InputGroup.Text>
          <Form.Control 
           style={{
            backgroundColor: 'transparent', 
            }}
            type="password" placeholder="Signup with Google" />
        </Form.Group>
<br/>
<br/>
        <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Control className="py-3"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }} 
            type="text"
            placeholder="First Name" 
            name="firstName" value={SignupDetails.firstName} onChange={handleInput} />
             <Form.Text className="text-danger">{SignupDetails.error_list.firstName}
                </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control className="py-3"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }}
               type="text" placeholder="Last Name" 
               name="lastName" value={SignupDetails.lastName} onChange={handleInput}/>
                <Form.Text className="text-danger">{SignupDetails.error_list.lastName}
                </Form.Text>
          </Form.Group>
        </Row>
<br/>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control className="py-3"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }}type="email" placeholder="Email" 
              name="email" value={SignupDetails.email} onChange={handleInput}/>
                <Form.Text className="text-danger">{SignupDetails.error_list.email}
                </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Select className="py-3" name="city"  onChange={handleInput}
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }} defaultValue="...Choose">
              <option>
                    City/Town
                  </option>
                  <option value="Abraka">
                      Abraka
                  </option>
                  <option value="Agbor">
                      Agbor
                  </option>
                  <option value="Asaba">
                      Asaba
                  </option>
                  <option value="Burutu">
                      Burutu
                  </option>
                  <option value="Effurun">
                      Effurun
                  </option>
                  <option value="Koko">
                      Koko
                  </option>
                  <option value="Kwale">
                      Kwale
                  </option>
                  <option value="Oghara">
                      Oghara
                  </option>
                  <option value="Ogwashi Ukwu">
                      Ogwashi Ukwu
                  </option>
                  <option value="Okuokoko">
                      Okuokoko
                  </option>
                  <option value="Oleh">
                      Oleh
                  </option>
                  <option value="Ovwian">
                      Ovwian
                  </option>
                  <option value="Ozoro">
                      Ozoro
                  </option>
                  <option value="Sapele">
                      Sapele
                  </option>
                  <option value="Ughelli">
                      Ughelli
                  </option>
                  <option value="Warri">
                      Warri
                  </option>
                
            </Form.Select>
          </Form.Group>
          </Row>
<br/>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCompanyName">
            <Form.Control className="py-3"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }} type="text" placeholder="Company Name" 
              name="companyName" value={SignupDetails.companyName} onChange={handleInput} />
               <Form.Text className="text-danger">{SignupDetails.error_list.companyName}
                </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control className="py-3"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }} type="text" placeholder="Company Registration No." 
              name="companyRegNo" value={SignupDetails.companyRegistrationNo} onChange={handleInput}/>
               <Form.Text className="text-danger">{SignupDetails.error_list.companyRegistrationNo}
                </Form.Text>
          </Form.Group>
        </Row>
<br/>
        
        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Control className="py-3 mb-3 d-flex mx-auto"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }} type="password" placeholder="Password"  
               name="password" value={SignupDetails.password} onChange={handleInput} />
                <Form.Text className="text-danger">{SignupDetails.error_list.password}
                </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Agree To Terms & Conditions" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Consent To Newsletters & Updates" />
        </Form.Group>

        <Button className='d-block w-25 mx-auto rounded-pill' style={{height: '60px'}} backgroundColor="#145CA4" type="submit">
          SignUp
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;