import React, {Fragment} from 'react';
import Auth from './auth/components/auth';
import LandingPage from './landing_page/components/landing_page';
// import Carausel from './landing_page/components/carausel';
import {connect} from 'react-redux';
import {visitLandingPage} from './landing_page/actions/actions';
import {bindActionCreators} from 'redux';
import Routes from './routes';
import CustomCarousel from './home_page/components/custom_carousel';
import Login from './auth/components/login';
import Register from './auth/components/register';
import {AuthRoute, ProtectedRoute} from './private_route';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <CustomCarousel infiniteLoop={true}></CustomCarousel>
//         <Routes >
//           {!this.props.currentUser && (<Auth/>)}
//         </Routes>
//       </>
//     );
//   }
// }


const App = () => {
  return (
    <>
      <AuthRoute exact path="/login" component={Login}/>
      <AuthRoute exact path="/register" component={Register} />
      <ProtectedRoute exact path="/" component={LandingPage}/>
    </>
  )
}

export default App;
