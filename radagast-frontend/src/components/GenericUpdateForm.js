import React, { Component, Fragment } from 'react';
import {Segment, Button, Icon, Grid, Divider, Form, Dimmer, Loader} from 'semantic-ui-react';
import TextField from './TextField';
import DataList from './DataList';
import {NotificationManager} from 'react-notifications';
import SliderInput from './SliderInput';

var pluralize = require('pluralize');

class GenericUpdateForm extends Component{
    constructor(props){
        super(props);
        this.state={
            ...props.states,
            formItemsProps: [],
            retrieved: {},
            isLoading: true,
            didSubmit: false
        }
        this.baseState = this.state;
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRetrieveData=this.handleRetrieveData.bind(this);
    }

    componentDidMount(){
        const users = ["dispatchers", "customer-supports", "area-managers", "couriers"]

        this.setState({
            formItemsProps: this.props.formItems
        });
        if(this.props.isUpdate){
            if(users.includes(this.props.type)){
                this.handleSpecialRetrieveData();
            }else{
                this.handleRetrieveData();
            }
        }
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

    handleSpecialRetrieveData = async()=>{
        const {type, dataId} = this.props;

        var tempOrigin = type;
        var tempId = dataId;

        await fetch(`http://localhost:3000/v1/${tempOrigin}/${tempId}`,{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {

            if(tempOrigin === "customer-supports"){
                tempOrigin = "customer_support";
            }else if(tempOrigin === "area-managers"){
                tempOrigin = "area_manager";
            }else{
                tempOrigin = pluralize.singular(tempOrigin);
            }
            var user = result[tempOrigin];
            var finalUser = {};

            console.log(user);

            finalUser.hub_id = user.hub_id; 
            finalUser.distribution_center_id = user.distribution_center_id
            finalUser.user_id = user.user_id;

            this.setState({retrieved: finalUser, isLoading: false, user_id: finalUser.user_id});

        })
	 	.catch((err) => {
             console.log(err);
             
        })
    }

    handleRetrieveData = async() =>{
        const {type, dataId} = this.props;

        var tempOrigin = type;
        var lookups = ["countries", "regions", "provinces", "districts", "sub-districts", "barangays"];
        var url = "";

		if(type === "subdistricts"){
			tempOrigin = "sub-districts";
        } else if(type === "dc"){
            tempOrigin = "distribution-centers"
        }
        if(lookups.includes(tempOrigin)){
            url = `http://localhost:3000/v1/lookups/${tempOrigin}/${dataId}`
        } else if(tempOrigin === "bookings"){
            url = `http://localhost:3000/v1/${tempOrigin}/${dataId}`
        
        }else if(tempOrigin === "pricings"){
            url = `http://localhost:3000/v1/lookups/prices/${dataId}`
        
        }else {
            url = `http://localhost:3000/v1/${tempOrigin}/${dataId}`
        }
        await fetch(url ,{
            method: 'GET'
            })
            .then((response) => { return response.json() })
            .then((result) => {
                if(tempOrigin === "sub-districts"){
                    tempOrigin = "sub_district";
                } else if(tempOrigin === "distribution-centers") {
                    tempOrigin = "distribution_centers";
                }else if(tempOrigin === "pricings") {
                    tempOrigin = "price";
                }
                console.log(result[pluralize.singular(tempOrigin)]);
                this.setState({
                    retrieved: result[pluralize.singular(tempOrigin)],
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log(err);
        })
    }

    isInputInvalid(requiredItem){
        var fieldInput = requiredItem.type === "select" ? Object.getOwnPropertyDescriptor(this.state, requiredItem.state_name).value : Object.getOwnPropertyDescriptor(this.state, requiredItem.name).value;

        console.log(fieldInput)
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
        const {formItemsProps}=this.state;
        const {dataId, type}=this.props;

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

            console.log(dataId)
            var self = this;       
            
            console.log(url, dataId);
            await fetch(`${url}/${dataId}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzE3MjYxNzksImV4cCI6MTUzMTczNjE3OSwianRpIjoiMjdjYTFiZjktNWU0Ni00YTIyLWJkMjItOTZkMzAxODQ4NjM5In0.7jKWhyI6rfth4Tkmc2Z1P-we6JcZcpHGkwhtWaSpG3k'
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
                }else return response.json
            })
            .then((result) => {
                if(result !== undefined){
                    console.log(result)
                    this.props.updateView();

                    this.setState({
                        isLoading: true
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

    render(){
        const {cancel, url, type, isUpdate} = this.props;
        const {formItemsProps, retrieved, isLoading, didSubmit} = this.state;
        const places = ["countries", "regions", "provinces", "districts", "subdistricts", "barangays"];
        const users = ["couriers", "dispatchers", "area-managers", "clients" ];
        const networks = ["hubs", "distribution_centers" ];
        return(
            <Segment basic style={{paddingTop: "2%"}}>
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
                                    <DataList name={item.state_name} label={item.label} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError} origin={item.name} value={retrieved[item.state_name]} isUpdate={isUpdate} isLoading={isLoading} parentComp={type} didSubmit={didSubmit}/>
                                :
                                    <DataList name={item.state_name} label={item.label} values={item.list} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError} value={retrieved[item.state_name]} isUpdate={isUpdate} isLoading={isLoading} parentComp={type} didSubmit={didSubmit}/>
                            )
                        }
                        {
                            item.type !== "select" && (
                                <TextField name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError} value={retrieved[item.name]} isUpdate={isUpdate} isLoading={isLoading} didSubmit={didSubmit}/>
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
                        <Button negative icon labelPosition='left' onClick={()=>{
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

export default GenericUpdateForm;