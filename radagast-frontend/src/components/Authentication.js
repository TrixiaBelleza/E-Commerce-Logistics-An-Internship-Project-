import React, { Component } from 'react';
import { Button, Container, Segment, Header, Form, Grid, Icon } from 'semantic-ui-react';
import {NotificationContainer} from 'react-notifications';
// import { NavLink } from 'react-router-dom';

import TextField from './TextField.js';
import DataList from './DataList.js';
import ForgotPassword from './ForgotPassword.js';
import '../styles/Authentication.css';
import {userOptions} from '../constants/constants.js';

class Authentication extends Component{
    state = {
        username: "",
        password: "",
        errorCheckUsername: "",
        errorCheckPassword: "",
        usertype: ""
    }

    handleUsernameInput = (e) => this.setState({ username: e})
    handlePasswordInput = (e) => this.setState({ password: e})
    handleUserType = async (name, value) => await this.setState({ [name]: value})
    handleSubmit = async () => {
        if(this.state.username === "") {
            await this.setState({errorCheckUsername: "Required"})
        } if(this.state.password === "") {
            await this.setState({errorCheckPassword: "Required"})
        } if(this.state.username !== "" && this.state.password !== "" && this.state.usertype !== "") {
            window.location.href = "/home";
        } 
        console.log(this.state.usertype);
    }

    render() {
        return(
            <div className="half-bg">
                <NotificationContainer/>
                <Container>
                    <div className="login-center">
                        <Segment padded="very" color="orange" raised className="login-container">
                            <Grid centered>
                                <Grid.Row>
                                    <Header as="h2" textAlign="center" icon>
                                        <Icon name="shipping fast" size="massive"/>
                                        RADAGAST
                                    </Header>
                                </Grid.Row>
                                <Grid.Row>
                                    <Form size="large" className="login-form">
                                        <DataList name="usertype"  values={userOptions} label="Sign in as:" placeholder="User" className="login-label" changeHandler={this.handleUserType}/>
                                        <TextField name="username" label="Username" placeholder="Username" type="text" className="login-label" changeHandler={this.handleUsernameInput}/>
                                        <TextField name="password" label="Password" placeholder="Password" type="password" className="login-label"  changeHandler={this.handlePasswordInput}/>
                                    </Form>
                                </Grid.Row> 
                                <Grid.Row>
                                    <Button color="orange" fluid size="big" onClick={this.handleSubmit}>SIGN IN</Button>
                                </Grid.Row>
                                <Grid.Row>
                                    <ForgotPassword text="Forgot Password?" header="Forgot Password"/>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Authentication;