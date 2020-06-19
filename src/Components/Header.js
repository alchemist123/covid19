import React, {Component}from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom';
class Header extends Component{
    constructor(props)
    {
        super(props);


    }
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand><img src="https://www.augenklinik.de/fileadmin/_processed_/4/d/csm_ICON_Corona-Virus_7adfd31c25.png" width="100" height="60"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/Home" className="nav-link">India</Link>
      <Link to="/World" className="nav-link">World</Link>
      <Link to="/News" className="nav-link">News</Link>
    </Nav>
  </Navbar>
            </div>
        );
    }
}
export default Header;