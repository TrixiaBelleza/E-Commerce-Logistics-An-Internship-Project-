import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import {courierFormItems, courierSampActContents, courierSampDeactContents, courierFormStates, confirmationDeactivateForm} from '../constants/constants.js';

class Courier extends Component{
    constructor(props) {
        super(props);
        this.state = {
            couriers: []
        }
        this.getCouriers = this.getCouriers.bind(this);
    }
    componentDidMount(){
        this.props.handleHeaderChange("COURIER","users");
        this.getCouriers();
    }

    async getCouriers() {
        this.props.shouldToggleLoading(true);

        await fetch('http://localhost:3000/v1/couriers', {
            method : 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            var tempCouriers = [];
            
            result.couriers.forEach(courier => {
                var finalCourier = {};

                finalCourier.id = courier.id;
                finalCourier.name = courier.User.last_name + ", " + courier.User.first_name + " " + dispatcher.User.middle_name;
            })
        })
    }

    handleAddButton = () => {
		console.log("Add");
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

    render() {

        return(   
            <div>
            <GenericAddButton action={this.handleAddButton} states={courierFormStates} form={courierFormItems} header_name="Courier" url="api/submit"/> 

            <Activation contentActItems={courierSampActContents} contentDeactItems={courierSampDeactContents} type="couriers" active={true} button1= "View Deactivated Couriers" button2="View Activated Couriers" reasons={confirmationDeactivateForm}/>
            </div>
        )
    }
}
export default Courier;