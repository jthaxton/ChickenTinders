import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
`;

const CustomCarousel = ({...props}) => {
  return (
    <StyledCarousel infiniteLoop={true} autoPlay={true} width={"40%"} stopOnHover={true} showThumbs={false} showStatus={false} showIndicators={false}>
      {
        props.restaurants && props.restaurants.map((restaurant, idx) => (
          <div key={idx}>
            <img src={restaurant.image_url} />
          </div>
        ))
      }
</StyledCarousel>
  );
}

export default CustomCarousel;