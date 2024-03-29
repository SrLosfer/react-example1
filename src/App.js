import logo from './logoMangus.jpg';
import './App.css';
import Home from "./Home";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import MyHobbies from "./MyHobbies";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="Container mt-5 m-5 p-1">
        <header className="App-header">
          <div className="Titulo">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="btn-group">
            <NavLink to="/react-example1/" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">Home</h5>
                </NavLink>
                <NavLink to="/AboutMe" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">About Me</h5>

                </NavLink>
                <NavLink to="/MyHobbies" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">My Hobbie</h5>

                </NavLink>
                <NavLink to="/ContactMe" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">Contact Me</h5>

                </NavLink>
            </div>

          </div>
        </header>
        <body>
          <Switch>
            <Route path="/" exact>
            <Home />
            </Route>
              
            
            <Route path="/AboutMe" exact>
              <AboutMe />
            </Route>
            <Route path="/MyHobbies" exact>
              <MyHobbies />
            </Route>
            <Route path="/ContactMe" exact>
              <ContactMe />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>  

      
  );
}

export default App;
