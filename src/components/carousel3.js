import React from "react";
import axios from 'axios';
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default class Top_Dish extends React.Component{
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
      <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="assets/img/img-02.jpg" alt=""/></Item>
          <Item><img src="assets/img/img-01.jpeg" alt=""/></Item>
          <Item><img src="assets/img/img-03.jpg" alt=""/></Item>
          <Item><img src="assets/img/img-02.jpg" alt=""/></Item>
          <Item><img src="assets/img/img-01.jpeg" alt=""/></Item>
          <Item><img src="assets/img/img-03.jpg" alt=""/></Item>
          <Item><img src="assets/img/img-02.jpg" alt=""/></Item>
          <Item><img src="assets/img/img-01.jpeg" alt=""/></Item>
        </Carousel>
        {/* <Carousel breakPoints={breakPoints} itemPadding={[10, 50]} itemsToShow={3}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel> */}
      </div>
    </>
    )
  }
}
