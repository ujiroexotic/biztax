import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
// import api from './api';
import axios from 'axios';
import swal from 'sweetalert';
import google from './Images/google.png'

const Signup = () => {

   
    const [SignupDetails, setSignupDetails] = useState({
      "firstName": "",
      "lastName": "",
      "email": "",
      "city": "",
      "companyName": "",
      "companyRegNo": "",
      "password": "",
            error_list: []
          
    });

  
    const handleInput = (e) => {
      e.persist();
      setSignupDetails({
        ...SignupDetails, [e.target.name] : e.target.value
      })
    }
  
    const History = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        FirstName: SignupDetails.firstName,
        LastName: SignupDetails.lastName,
        email: SignupDetails.email,
        CompanyName: SignupDetails.companyName,
        CompanyRegNo: SignupDetails.CompanyRegNo,
        password: SignupDetails.password


      }
      const Signup = async () => {
        try {
  
           const response = await axios.post('https://biztax-backend.herokuapp.com/api/v1/user/adduser', {
            firstName: data.FirstName,
             lastName: data.LastName,
              email:  data.email,
              companyName: data.CompanyName,
              companyRegNo: data.CompanyRegNo,
              password: data.password,
          })
          if(response.data.status === 201){
             console.log(response.data)
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('username', response.data.newUser);
              swal("Success", response.data.message, "success")
              History.push('/login')
            }
            else{
              setSignupDetails({
                ...SignupDetails, error_list: response.data.validation_errors
              })
            }

          // .then(
            // res => {
              // if(res.data.status === 201){
              //  console.log(res.data)
              //   localStorage.setItem('token', res.data.token);
              //   localStorage.setItem('username', res.data.newUser);
              //   swal("Success", res.data.message, "success")
              //   History.push('/login')
              // }
              // else{
              //   setSignupDetails({
              //     ...SignupDetails, error_list: res.data.validation_errors
              //   })
              // }
            // }
          // )
   
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
            name="First Name" value={SignupDetails.FirstName} onChange={handleInput} />
             <Form.Text className="text-danger">{SignupDetails.error_list.FirstName}
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
               name="Last Name" value={SignupDetails.LastName} onChange={handleInput}/>
                <Form.Text className="text-danger">{SignupDetails.error_list.LastName}
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
            <Form.Select className="py-3"
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
              }} type="Company Name" placeholder="Company Name" 
              name="Company Name" value={SignupDetails.CompanyName} onChange={handleInput} />
               <Form.Text className="text-danger">{SignupDetails.error_list.CompanyName}
                </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control className="py-3"
            style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }} type="Company Registration No." placeholder="Company Registration No." 
              name="Company Registration No." value={SignupDetails.CompanyRegistrationNo} onChange={handleInput}/>
               <Form.Text className="text-danger">{SignupDetails.error_list.CompanyRegistrationNo}
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