import React, {Fragment} from 'react';
import {loginUser} from '../actions/auth_actions';
import { bindActionCreators } from 'redux';
import  {connect}  from 'react-redux'; 

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const payload = Object.assign(this.state, {token: this.props.token})
        this.props.loginUser(payload)
        if( this.props.user.session_token ) history.push('/')

    }

    render() {
        const {username, password} = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" value={username} onChange={e => this.setState({username: e.currentTarget.value})}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label><input type="password" value={password} onChange={e => this.setState({password: e.currentTarget.value})}/>
                    </div>
                    <button>Submit</button>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token.token,
        user: state.auth.user
    };
}

const mapDispatchToProps = dispatch => {
    return (
        bindActionCreators({
            loginUser
        }, dispatch)
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)