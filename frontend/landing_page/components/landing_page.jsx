import React, { useState, useEffect } from 'react';
import CustomCarousel from '../../home_page/components/custom_carousel';
import NavBar from '../../home_page/components/nav_bar';
import { bindActionCreators } from 'redux';
import  {connect}  from 'react-redux';
import { refreshRestaurants, createPendingInterest, deletePendingInterest } from '../actions/actions'



const LandingPage = ({...props}) => {
    const [refreshed, setRefreshed] = useState(false);

    useEffect(() => {
        if(!refreshed) {
            props.refreshRestaurants();
            setRefreshed(true);
        }
    })
    return (
        <>
            <CustomCarousel token={props.token} deletePendingInterest={props.deletePendingInterest} createPendingInterest={props.createPendingInterest} restaurants={props.restaurants} infiniteLoop={true}></CustomCarousel>
        </>
    )
}

const mapStateToProps = state => {
    return {
        token: state.auth.token.token,
        restaurants: state.landingPage.restaurants,
    };
}

const mapDispatchToProps = dispatch => {
    return (
        bindActionCreators({
            refreshRestaurants,
            createPendingInterest,
            deletePendingInterest,
        }, dispatch)
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);