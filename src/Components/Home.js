import React, {Component}from 'react';
import{Card} from 'react-bootstrap';
import State from './State'
class Home extends Component{
    constructor(props)
    {
        super(props);


    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12"><img src="https://www.countryflags.io/IN/shiny/64.png" /><br/><h2>INDIA</h2></div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>TOTAL CASE</Card.Title>
                            <Card.Text><h4>754652</h4></Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">[Today:24]</Card.Subtitle>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-3">
                        <Card className="badge badge-warning" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>ACTIVE CASE</Card.Title>
                            <Card.Text><h4>754652</h4></Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">[Today:24]</Card.Subtitle>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>RECOVERED</Card.Title>
                            <Card.Text><h4>754652</h4></Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">[Today:24]</Card.Subtitle>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-3">
                        <Card className="badge badge-danger" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>DEATH</Card.Title>
                            <Card.Text><h4>754652</h4></Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">[Today:24]</Card.Subtitle>
                        </Card.Body>
                        </Card>
                       </div>
                        <State/>
                     
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
