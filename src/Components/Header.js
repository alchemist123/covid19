import React, {Component}from 'react';
import {Navbar,Nav} from 'react-bootstrap';
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
      <Nav.Link href="#home">India</Nav.Link>
      <Nav.Link href="#features">World</Nav.Link>
      <Nav.Link href="#pricing">News</Nav.Link>
    </Nav>
  </Navbar>
            </div>
        );
    }
}
export default Header;