import React from 'react';
import {registerUser, registerUserSuccess} from '../actions/auth_actions';
import { bindActionCreators } from 'redux';
import  {connect}  from 'react-redux'; 

export class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = () => {
        const {registerUser} = this.props;
        return registerUser(this.state);
    }

    render() {
        const {email, password} = this.state;
        return (
        <div>
            <input type="email" value={email} onChange={e => this.setState({email: e.target.value})}/>
            <input type="password" value={password} onChange={e => this.setState({password: e.target.value})}/>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
        );
    }



}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators({registerUser, registerUserSuccess}, dispatch)
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
