import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavbarComponent from './navbarComponent';
import Home from './home';
import CardComponent from './cardComponent';
import ErrorPage from './errorPage';
import CalculatorComponent from './calculator';
import FooterComponent from './footerComponent';
import SuccessComponent from './successComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import Contactus from './ContactusComponent';


function App() {
  return (
    <div className="App">
      <Router>
            <header>
              <NavbarComponent/>
            </header>
            <Switch>
            <Route exact  path="/">
            < Home />
            </Route>
            <Route exact  path="/about">
            <CardComponent />
            </Route>
            <Route exact  path="/calculator">
            <CalculatorComponent />
            </Route>
            <Route exact  path="/success">
            <SuccessComponent />
            </Route>
            <Route exact  path="/login">
            <Login />
            </Route>
            <Route exact  path="/signin">
            <Signup />
            </Route>
            <Route exact  path="/contact">
            <Contactus />
            </Route>
            
            <Route path="*">
          <ErrorPage />
        </Route>
        </Switch>
      </Router>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
