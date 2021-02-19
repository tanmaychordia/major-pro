import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export class BootstrapCarousel extends Component{
  render(){
    return(
      <div>
           <div className='container-fluid'>
               <Carousel>
                  <Carousel.Item style={{'height':"300px"}} >
                      <img style={{'height':"300px"}}alt=""
                      className="d-block w-100"
                      src={'assets/img/img-01.jpeg'}  />
                      <Carousel.Caption>
                      <h3> </h3>
                      </Carousel.Caption>
                  </Carousel.Item  >

                  <Carousel.Item style={{'height':"300px"}}>
                      <img style={{'height':"300px"}}  alt=""
                      className="d-block w-100"
                      src={'assets/img/img-02.jpg'}    />
                      <Carousel.Caption>
                      <h3> </h3>

                      </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item style={{'height':"300px"}}>
                      <img style={{'height':"300px"}}  alt=""
                      className="d-block w-100"
                      src={'assets/img/img-03.jpg'}   />
                      <Carousel.Caption>
                      <h3> </h3>
                      </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </div>
      </div>
    )
  }
}
