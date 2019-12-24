import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const styledCarousel = styled.div`

`;

const CustomCarousel = ({...props}) => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} >
    <div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/2lUFO5HWD7_RLDWlT5Nvuw/l.jpg" />
    </div>
    <div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/WlwgKsyIHjuxOzxxQEfVgw/l.jpg" />
    </div>
    <div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/dF5pozJHzeT9KjbNBYuVpA/l.jpg" />
    </div>
</Carousel>
  );
}

export default CustomCarousel;