import React from 'react';
import {registerUser, registerUserSuccess} from '../actions/auth_actions';
import { bindActionCreators } from 'redux';
import  {connect}  from 'react-redux'; 

export class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            first_name: "",
            last_name: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {registerUser, token} = this.props;
        const payload = Object.assign(this.state, {token: token})
        registerUser(payload);
        history.push('/')
    }

    render() {
        const {username, first_name, last_name, password} = this.state;
        return (
        <div>
            <label htmlFor="username">Username</label><input type="text" value={username} onChange={e => this.setState({username: e.target.value})}/>
            <label htmlFor="first_name">First</label><input type="text" value={first_name} onChange={e => this.setState({first_name: e.target.value})}/>
            <label htmlFor="last_name">Last</label><input type="text" value={last_name} onChange={e => this.setState({last_name: e.target.value})}/>
            <label htmlFor="password">Password</label><input type="password" value={password} onChange={e => this.setState({password: e.target.value})}/>
            <button type="submit" onClick={() => this.handleSubmit()}>Submit</button>
        </div>
        );
    }



}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators({registerUser, registerUserSuccess}, dispatch)
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);