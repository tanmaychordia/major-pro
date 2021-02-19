import React from 'react';
import NavBar from '../header';
import Top_Dish from '../components/carousel3';
import { BootstrapCarousel } from '../components/caraousel2';
// import BootstrapCarouselComponent from '../components/new_carousel';
import Rest from '../components/det';
import Album from '../Homecards';




function Home() {
    return (
      <div className="container">
        <NavBar/><br/><br/>
        <Top_Dish></Top_Dish>
        <br/><BootstrapCarousel></BootstrapCarousel>
        {/* <BootstrapCarouselComponent></BootstrapCarouselComponent> */}
        <Rest></Rest>
        {/* <Album/> */}
      </div>
    );
  }

  export default Home;
