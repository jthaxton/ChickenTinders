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
  const handleLike = (e, id) => {
    const payload = { id: id, token: props.token };
    props.createPendingInterest(payload);
    e.preventDefault();

  }

  const handleDislike = (e, id) => {
    const payload = { id: id, token: props.token };
    props.deletePendingInterest(payload);
    e.preventDefault();

  }

  return (
    <StyledCarousel infiniteLoop={true} autoPlay={true} width={"40%"} stopOnHover={true} showThumbs={false} showStatus={false} showIndicators={false}>
      {
        props.restaurants && props.restaurants.map((restaurant, idx) => (
          <div key={idx}>
            <img src={restaurant.image_url} />
            {!restaurant.interested && (<button onClick={(e) => handleLike(e,restaurant.id)}>Like</button>)}
            {restaurant.interested && (<button onClick={(e) => handleDislike(e,restaurant.id)} >Unlike</button>)}
          </div>
        ))
      }
</StyledCarousel>
  );
}

export default CustomCarousel;