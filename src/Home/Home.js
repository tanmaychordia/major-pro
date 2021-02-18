import React from 'react';
import NavBar from '../header';
import BootstrapCarouselComponent from '../components/new_carousel';
import Rest from '../components/det';
import Album from '../Homecards';
import { BootstrapCarousel } from '../components/caraousel2';
import MultiCarouselPage from '../components/caraousel';
import Top_Dish from '../components/carousel3';


function Home() {
    return (
      <div className="container">
        <NavBar/><br/><br/>
        <Top_Dish></Top_Dish>
        {/* <MultiCarouselPage></MultiCarouselPage> */}
        <br/><BootstrapCarousel></BootstrapCarousel>
        <BootstrapCarouselComponent></BootstrapCarouselComponent>
        <Rest></Rest>
        {/* <Album/> */}
      </div>
    );
  }

  export default Home;
