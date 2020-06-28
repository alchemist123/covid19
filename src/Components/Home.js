import React, {Component}from 'react';
import{Card} from 'react-bootstrap';
import State from './State';
import axios from 'axios';
class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:{},
            inda:[]
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data:response.data});
        });
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
                            <Card.Text><h4>{this.state.data.cases}</h4></Card.Text>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-3">
                        <Card className="badge badge-warning" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>ACTIVE CASE</Card.Title>
        <Card.Text><h4>{this.state.data.active}</h4></Card.Text>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>RECOVERED</Card.Title>
                            <Card.Text><h4>{this.state.data.recovered}</h4></Card.Text>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-3">
                        <Card className="badge badge-danger" style={{ width: '18rem' }}>
                         <Card.Body>
                         <Card.Title>DEATH</Card.Title>
                            <Card.Text><h4>{this.state.data.deaths}</h4></Card.Text>
                        </Card.Body>
                        </Card>
                       </div>
                        <State/>
                      
                     
                    </div>
                   
                </div>
               
            <state/>
        
            </div>
            
        );
    }
}
export default Home;