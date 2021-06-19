import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import MyHobbies from "./components/MyHobbies";
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
            <NavLink to="/react-example/" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">Home</h5>
                </NavLink>
                <NavLink to="react-example1/AboutMe" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">About Me</h5>

                </NavLink>
                <NavLink to="react-example1/MyHobbies" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">My Hobbie</h5>

                </NavLink>
                <NavLink to="react-example1/ContactMe" className="btn btn-dark m-5" activeClassName="active">
                  <h5 className="bg-dark m-1">Contact Me</h5>

                </NavLink>
            </div>

          </div>
        </header>
        <body>
          <Switch>
            <Route path="/react-example1/" exact>
              <Home/>
            </Route>
            <Route path="react-example1/AboutMe" exact>
              <AboutMe />
            </Route>
            <Route path="react-example1/MyHobbies" exact>
              <MyHobbies />
            </Route>
            <Route path="react-example1/ContactMe" exact>
              <ContactMe />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>  

      
  );
}

export default App;
