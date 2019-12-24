import React from 'react';
import CustomCarousel from '../../home_page/components/custom_carousel';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
              <CustomCarousel infiniteLoop={true}></CustomCarousel>
            </>
            

        )

    }
}