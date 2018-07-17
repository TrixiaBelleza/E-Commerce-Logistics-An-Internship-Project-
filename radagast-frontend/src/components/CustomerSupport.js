import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {customerSupportFormItems, customerSupportFormStates, confirmationDeactivateForm, userUpdateFormItems} from '../constants/constants.js';

class CustomerSupport extends Component{
    constructor(props) {
        super(props);
        this.state = {
            customer_supports:[],
            users: []
        }
        this.getCustomerSupports = this.getCustomerSupports.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("CUSTOMER SUPPORT REPRESENTATIVE","users");
        this.getCustomerSupports();
    }

    async getCustomerSupports() {
        this.props.shouldToggleLoading(true);

		await fetch('http://localhost:3000/v1/customer-supports',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            var tempCsrs = [];

            result.customer_supports.forEach(csr => {
                var finalCsr = {};

                finalCsr.name = csr.User.last_name + ", " + csr.User.first_name + " " + csr.User.middle_name;

                finalCsr.email = csr.User.email;
                finalCsr.contact_number = csr.User.contact_number;


                fetch(`http://localhost:3000/v1/hubs/${csr.hub_id}`, {
                    method: 'GET'
                }).then(response => {return response.json()})
                .then(result => { 
                    finalCsr.hub = result.hub.name + " (" + result.hub.code + ")";
                    finalCsr.updated = csr.updated; 
                });
            
                fetch(`http://localhost:3000/v1/distribution-centers/${csr.distribution_center_id}`, {
                    method: 'GET'
                }).then(response => {return response.json()})
                .then(result => { finalCsr.dc = result.distribution_center.name + " (" + result.distribution_center.code + ")"});

                finalCsr.id = csr.id;

                tempCsrs.push(finalCsr); 
            });

            console.log(tempCsrs);
            
            this.setState({customer_supports: tempCsrs});

            setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)

        })
	 	.catch((err) => {
             console.log(err);
             
             setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)
        })
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }
    
    render(){
        return(
            <div>
                <Container>
                    <GenericAddButton states={customerSupportFormStates} form={customerSupportFormItems} header_name="Customer Support Representative" type="customer-supports" url="http://localhost:3000/v1/customer-supports" updateView={this.getCustomerSupports} successMessage="Successfully added customer support representative!"/>
                    
                    <Activation contentActItems={this.state.customer_supports} states={customerSupportFormStates} form={userUpdateFormItems} type="customer-supports" active={true} button1= "View Deactivated CSR's" button2="View Activated CSR's"  updateView={this.getCustomerSupports} reasons={confirmationDeactivateForm} url="http://localhost:3000/v1/customer-supports" updateView={this.getCustomerSupports} successMessage="Successfully updated customer support representative!"/>
                </Container>
            </div>
        )
    }
}

export default CustomerSupport;