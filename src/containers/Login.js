import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {Auth} from "aws-amplify";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            email: "",
            password: ""
         };
    }
    validateForm() {
        return this.state.email.length>0 && this.state.password.length>0;
    }

    handleChage = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({isLoading: true});

        try {
            await Auth.signIn(this.state.email,this.state.password);
            this.props.userHasAuthenticated(true);
            //this.props.history.push("/");
        } catch(e) {
            alert(e.message);
            this.setState({isLoading: false});
        }
    }

    render() { 
        return (  
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl 
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChage}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChage}
                        />   
                    </FormGroup>
                    <LoaderButton 
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit" 
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in..."
                    />
                </form>
            </div>
        );
    }
}
 
export default Login;