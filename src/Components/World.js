import React, {Component}from 'react';
import axios from 'axios';
import {Card,Accordion,Button} from 'react-bootstrap';

class World extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:[]
        }


    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({data:response.data});
           // console.log(response.data)
        });
    }
    render(){
        return(
            <div>
            <Accordion>
                {
                    this.state.data.map((itm,ky)=>{
                        return(

                            <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="primary" eventKey={ky}>
            <img wdth="90" height="40" src={itm.countryInfo.flag}/> &nbsp; &nbsp;{itm.country}
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={ky}>
            <Card.Body>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>
                                Total case
                            </td>
                        <td>Today cases</td>
                            <td>
                                Active
                            </td>
                            <td>Recovered</td>
                            <td>Today Recovered</td>
                            <td>Critical</td>
                            <td>
                                Deaths
                            </td>
                            <td>Today Deaths</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{itm.cases}</td>
                        <td>{itm.todayCases}</td>
                        <td>{itm.active}</td>
                        <td>{itm.recovered}</td>
                        <td>{itm.todayRecovered}</td>
                        <td>{itm.critical}</td>
                        <td>{itm.deaths}</td>
                        <td>{itm.todayDeaths}</td>
                        </tr>
                    </tbody>
                </table>
            </Card.Body>
            </Accordion.Collapse>
            </Card>
           

                        );
                    })
                }
                 </Accordion>
            
      
            </div>
        );
    }
}
export default World;