import React, {Component}from 'react';
import axios from 'axios';
import {Accordion} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
class State extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            statedata : {}
        }
    }
        componentDidMount(){
            axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
                this.setState({statedata:response.data});
            });
        }

    
    render(){
        let Keys= Object.keys(this.state.statedata);

        return(
           <div>
            <Accordion>
                {
                    Keys.map((itm,ky)=>{
                        let dist=this.state.statedata[itm].districtData;
                        let dist_key=Object.keys(dist);
                        let totalActive=0;
                        let totalConfirmed=0;
                        let totalRecovered=0;
                        let totalDeath=0;
                        let dist_list =[];
                        for( let x in dist)
                        {
                            totalActive += dist[x].active;
                            totalConfirmed += dist[x].confirmed;
                            totalRecovered += dist[x].recovered;
                            totalDeath += dist[x].deceased;
                            let ob=dist[x];
                            ob["dist_name"]=x;
                            dist_list.push(ob);
                        }
                        return(  <Card>
                            <Card.Header>
                               <Accordion.Toggle as={Button} variant="primary" eventKey={ky}>
                                    {itm}&nbsp; &nbsp;  &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp; &nbsp;Details &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-  &nbsp; &nbsp; &nbsp; &nbsp;<span className="btn-dark p-1 mr-2">Total Cases:{totalConfirmed}</span> &nbsp; &nbsp; &nbsp; &nbsp;<span className="btn-warning p-1 mr-2"> Active:{totalActive} </span>&nbsp; &nbsp; &nbsp;  &nbsp;<span className="btn-success p-1 mr-2">Recovered:{totalRecovered}</span> &nbsp; &nbsp; &nbsp;&nbsp;<span className="btn-danger p-1 mr-2">Deaths:{totalDeath}</span>
                               </Accordion.Toggle>
                           </Card.Header>
                           <Accordion.Collapse eventKey={ky}>
                           <Card.Body>
                               <table className="table table-bordered table-striped">
                                   <thead>
                                       <tr>
                                          <td>District</td> 
                                      <td> Confirmed</td>
                                     <td> Active</td> 
                                      <td> Recovered</td>
                                       <td>Deaths</td>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {
                                           dist_list.map((itm,ky)=>{
                                               return(
                                                   <tr>
                                                       <td>{itm.dist_name}</td>
                                                       <td>{itm.confirmed}</td>
                                                       <td>{itm.active}</td>
                                                       <td>{itm.recovered}</td>
                                                       <td>{itm.deceased}</td>
                                                   </tr>
                                               );
                                           })
                                       }
                                   </tbody>
                               </table>
                           </Card.Body>
                           </Accordion.Collapse>
                           </Card>

                        );
                    }
                    )
                }
           
            </Accordion>
            
            </div>
        );
    }
}
export default State;