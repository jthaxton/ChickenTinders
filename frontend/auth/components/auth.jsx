import React, {Fragment} from 'react';
import { bindActionCreators } from 'redux';
import  {connect}  from 'react-redux'; 
import Login from './login';
import Register from './register';
import styled from 'styled-components';


class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            register: false,
            currentComponent: "Login"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {login, register, currentComponent} = this.state;
        this.setState({login: !login});
        this.setState({register: !register});

        if (currentComponent === "Login") {
            this.setState({currentComponent: "Register"});
        } else {
            this.setState({currentComponent: "Login"});
        }
    }

    render() {
        const {login, register, currentComponent, currentUser} = this.state
        return (
            <Fragment>
            {!currentUser && (
                <div>
                {login && (
                    <Login/>
                )}
                {register && (
                    <Register />
                )}
                <button onClick={this.handleClick}>Click to {currentComponent}</button>
                </div>
            )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return (bindActionCreators({

    }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);