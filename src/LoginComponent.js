import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import api from './api';


const Login = () => {

const [loginDetails, setLoginDetails] = useState({
  email: "",
  password: "",
  error_list: []
});


const history = useHistory();
const [isPending, ] = useState(true)
const handleInput = (e) => {
  e.persist()
  setLoginDetails({
    ...loginDetails, [e.target.name]: e.target.value
  })
}

const data = {
  email : loginDetails.email,
  password : loginDetails.password
}


const handleSubmit = (e) => {
  e.preventDefault();

  const login = async() => {
    try {
      const res = await api.post('/signin', {
        email: data.email,
        password: data.password

        
      })
      if(res.data.token){
        console.log(data)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.user);
        swal("Success", res.data.message, "success")
        history.push('/calculator')

      }
      else{
        // const emailError = res.data.validation_errors.email[0] ?
        // res.data.validation_errors.email[0] : '';
        // const passwordError = res.data.validation_errors.password[0] ?
        // res.data.validation_errors.password[0] : '';
        
         swal("Login Invalid", "error");
       
         setLoginDetails({
          ...loginDetails, error_list: res.data.validation_errors
        })
      }
        
    } catch (error) {
      swal("Request not Performed", error.message, "error")
      console.log(error)
    }
  } 
  login();

  
}
  return (
    
        <div>
          
          <Row className='pt-5 col-6 mx-auto' >
           <Col md={{ span: 6, offset: 3 }} sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control style={{
              backgroundColor: '#D9D9D9', 
              borderRadius: '10px',
              height: '60px',
              maxWidth: '499px'
              }}
              type="text" placeholder="Email" name="email" value={loginDetails.email} onChange={handleInput} />
                <Form.Text className="text-danger">{loginDetails.error_list.email}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control 
                style={{
                  backgroundColor: '#D9D9D9', 
                  borderRadius: '10px',
                  height: '60px',
                  maxWidth: '499px'
                  }}
                  type="password" placeholder="Password" name="password" value={loginDetails.password} onChange={handleInput} />
                <Form.Text className="text-danger">{loginDetails.error_list.password}
                </Form.Text>
              </Form.Group>
              <p className="Forgot-password " >
                <a className='text-decoration-none' href="!#">Forgot Password</a> 
                </p> 
<br/>
              { isPending && <Button className='d-block w-50 mx-auto rounded-pill'style={{height: '60px' }} backgroundColor="#145CA4" type="login" >
                Login
              </Button>}
              { !isPending && <Button  variant="primary btn-lg" type="login" disabled className='login-button'>
                Submitting the blog <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
              </Button>}
            </Form>
            </Col>
        </Row>
        </div>
      
  );
  }

export default Login;