import axios from 'axios';
import React from 'react';
import {Card} from 'react-bootstrap';
export default class Rest extends React.Component{
  constructor(){
    super();
    this.state={
      restau:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8080/api/restaurants/rating')
    .then((res)=>{
      const restau=res.data;
      this.setState({restau})
      console.log(restau);
    })
  }
  render(){
    return(
      <div>
        <ul>
          {
            this.state.restau.map((det)=>{
              return <div>
                <br/>
                <Card bg="dark" center text="white" style={{ width: '18rem' }}>
				          <Card.Header>Ratings</Card.Header>
                    <Card.Body>Restaurant Id : {det.restId}
                      <Card.Text>
                         Restaurant Rating : {det.ratings}<br/>
                      </Card.Text>
                     </Card.Body>
                </Card><br/>
                </div>
            })
          }
        </ul>
        {/* <ul>
          {
            this.state.restau.map((det)=>{
              return <div>
                <li key={det.restId}>
                  {det.restId}
                  {det.restName}
                  {det.restAddress}
                </li>
              </div>
            })
          }
        </ul> */}
      </div>
    )
}
}

