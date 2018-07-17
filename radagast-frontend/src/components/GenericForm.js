import React, { Component, Fragment } from 'react';
import {Segment, Button, Icon, Grid, Divider, Form, Dimmer, Loader} from 'semantic-ui-react';
import TextField from './TextField';
import DataList from './DataList';
import {NotificationManager} from 'react-notifications';
import SliderInput from './SliderInput';

class GenericForm extends Component{
    constructor(props){
        super(props);
        this.state={
            ...props.states,
            formItemsProps: [],
            isLoading: false,
            didSubmit: false
        }
        this.baseState = this.state;
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            formItemsProps: this.props.formItems
        });
    }
    
    handleChange = (name, value) => {
        const {formItemsProps} = this.state;
        var indexName = formItemsProps.findIndex(item => item.name === name);
        var indexStateName = formItemsProps.findIndex(item => item.state_name === name);

        this.setState({ [name]: value })
        
        if(indexName !== -1){
            formItemsProps[indexName].hasError = false;
        }else if(indexStateName !== -1){
            formItemsProps[indexStateName].hasError = false;
        }
    }

    isInputInvalid(requiredItem){
        var fieldInput = requiredItem.type === "select" ? Object.getOwnPropertyDescriptor(this.state, requiredItem.state_name).value : Object.getOwnPropertyDescriptor(this.state, requiredItem.name).value;
       console.log(requiredItem);
        switch(requiredItem.type){
            case "number":
                if(fieldInput === 0 || isNaN(fieldInput)) return true;
                break;

            case "email":
                const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(!regex.test(fieldInput) || fieldInput === "") return true;
                break;

            case "select":
                if(requiredItem.option_type === "text"){
                    console.log(fieldInput);
                    if(fieldInput === "") return true;
                }
                else{
                    if(fieldInput === 0) return true;
                }
                break;
            default:
                if(fieldInput === "") return true;
                break;
        }
    }

    handleSubmit = async (url) => {
        var keys = Object.getOwnPropertyNames(this.props.states);
        var isValidForm = [];
        var type = this.props.type;
        const {formItemsProps}=this.state;
        keys.forEach(key=>{
            var indexFound;

            var requiredItem = formItemsProps.find((item, index)=>{
                indexFound = index;
               
                if(item.type !== "select" && item.name === key) {
                    return item
                } else if (item.type === "select" && item.state_name === key) {
                    return item
                } return undefined;
            });

            if(requiredItem !== undefined && requiredItem.isRequired && this.isInputInvalid(requiredItem)){
                formItemsProps[indexFound].hasError = true;
            }else{
                formItemsProps[indexFound].hasError = false;
            }

            isValidForm.push(formItemsProps[indexFound].hasError);
        });

        this.forceUpdate();
       
        if(isValidForm.every(input => !input)){
            this.setState({
                isLoading: true,
                didSubmit: true
            })
            var self = this;

            console.log(type);
            if (type === "dispatchers" || type==="area-managers" || type=== "customer-supports"){
                await fetch('http://localhost:3000/v1/users', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE1MzE3OTY3NzEsImV4cCI6MTUzMTgwNjc3MSwianRpIjoiYWE0YWM2Y2MtYjMxMi00ZDNjLTk2NTUtZjdjZjAxYzNjNDI2In0.L198h2nQEMv9Y_b_5TTI7oU05CWK7qKAyxgyNirzrKs'
                    },
                    body: JSON.stringify(
                        self.state
                    )
                })
                .then((response) => { if(!response.ok) {
                    return response.text().then(text => {
                            NotificationManager.error(text, 'Error!', 5000)
                        })
                    }else return response.json() 
                })
                .then((result) => {
                    if(result !== undefined){
                        console.log(result);
                        console.log("added to user");
                        console.log(result.user.id);
                        this.setState({user_id: result.user.id})
                        fetch(`${url}`, {
                            method: 'post',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzE3MDI0NTUsImV4cCI6MTUzMTcxMjQ1NSwianRpIjoiOGMwOTg3OTItOGIwMi00YmQ4LWEyNmEtNjM4MDE1OWYzZTczIn0.-x-aveJC5ZEDdFnVLGT4dIUF2F5SDfFBkxNdeEsASNI'
                            },
                            body: JSON.stringify(
                                self.state
                            )
                        })
                        .then((response) => { if(!response.ok) {
                            return response.text().then(text => {
                                    this.props.cancel();
                                    NotificationManager.error(text, 'Error!', 5000)
                                })
                            }else return response.json() 
                        })
                        .then((result) => {
                            if(result !== undefined){
                                console.log(result);
                                this.props.updateView();

                                this.setState({
                                    isLoading: false
                                })

                                this.props.cancel();
                                
                                NotificationManager.success(this.state.name, this.props.successMessage);
                                this.setState(this.baseState);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        }) 
                    }
                    
                })
                 .catch((err) => {
                     console.log(err);
                }) 

            }
            else{ 
                console.log(url)
                await fetch(`${url}`, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzE3MDI0NTUsImV4cCI6MTUzMTcxMjQ1NSwianRpIjoiOGMwOTg3OTItOGIwMi00YmQ4LWEyNmEtNjM4MDE1OWYzZTczIn0.-x-aveJC5ZEDdFnVLGT4dIUF2F5SDfFBkxNdeEsASNI'
                    },
                    body: JSON.stringify(
                        self.state
                    )
                })
                .then((response) => { 
                    if(!response.ok) {
                        return response.text().then(text => {
                            this.props.cancel();
                            NotificationManager.error(text, 'Error!', 5000)
                        })
                    }else return response.json() 
                })
                .then((result) => {
                    if(result !== undefined){
                        console.log(result)
                        this.props.updateView();

                        this.setState({
                            isLoading: false
                        })

                        this.props.cancel();
                        
                        NotificationManager.success(this.state.name, this.props.successMessage);
                        this.setState(this.baseState);
                    }
                })
                .catch((err) => {
                    console.log(err);
                }) 
            }       
        }
    }

    render(){
        const {cancel, url, type, states} = this.props;
        const {formItemsProps, isLoading, didSubmit} = this.state;
        const places = ["countries", "regions", "provinces", "districts", "subdistricts", "barangays"];
        const users = ["couriers", "dispatchers", "area-managers", "customer-supports"];
        const networks = ["hubs", "distribution_centers" , "clients"];
        return(
            <Segment basic>
                <Dimmer active={isLoading} inverted>
                    <Loader size="large"/>
                </Dimmer>
                <Form>         
                {
                    formItemsProps.map((item)=>(
                        <div>
                            
                        {
                            item.type === "select" && (
                                
                                (places.includes(item.name)|| (users.includes(item.name)) || networks.includes(item.name)) ?
                                    
                                    <DataList name={item.state_name} label={item.label} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError} origin={item.name} value={states[item.state_name]} parentComp={type} didSubmit={didSubmit}/>
                                :
                                    <DataList name={item.state_name} label={item.label} values={item.list} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError} value={states[item.state_name]} parentComp={type} didSubmit={didSubmit}/>
                            )
                        }
                        {
                            item.type !== "select" && (
                                <TextField name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError} value={states[item.name]} didSubmit={didSubmit}/>
                            )
                        }
                        <Divider horizontal fitted/>
                        </div>
                    ))
                }
                {
                    type === "accounts" && (
                        <Fragment>
                            <Form.Field>
                                <label> PICKUP POSITIONING TIME <span style={{color: 'red'}}>*</span></label>
                                <SliderInput/>
                            </Form.Field>
                            <Form.Field>
                                <label> DELIVERY POSITIONING TIME <span style={{color: 'red'}}>*</span></label>
                                <SliderInput/>
                            </Form.Field>
                        </Fragment>
                    )
                }
                    
                </Form>
                <Divider horizontal/>
                <Grid centered>
                    <Grid.Row>
                        <Button negative icon labelPosition='left' 
                            onClick={()=>{
                                this.state.formItemsProps.forEach(item=>{
                                    item.hasError = false;
                                });
                                cancel();
                                
                            }}>
                            <Icon name="x"/>
                            CANCEL
                        </Button>
                        <Button positive icon labelPosition='left' type="submit" onClick={() => {this.handleSubmit(url)}}>
                            <Icon name="check"/>
                            CONFIRM
                        </Button>
                    </Grid.Row>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                </Grid>
            </Segment>
        )
    }
}

export default GenericForm;