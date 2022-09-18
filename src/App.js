import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavbarComponent from './navbarComponent';
import Home from './home';
import CardComponent from './cardComponent';
import ErrorPage from './errorPage';
import CalculatorComponent from './calculator';


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
            
            <Route path="*">
          <ErrorPage />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
