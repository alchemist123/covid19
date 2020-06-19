import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import World from './Components/World.js';
import Header from './Components/Header.js';
import News from './Components/News.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
          <Home/>
            </Route>
            <Route path="/Home">
          <Home/>
            </Route>
            <Route path="/World">
          <World/>
            </Route>
            <Route path="/News">
          <News/>
            </Route>
        </Switch>
      </Router>
   
    </div>

  );
}

export default App;
