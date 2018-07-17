import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';

import { dispatcherFormStates, dispatcherFormItems, confirmationDeactivateForm, userUpdateFormItems} from '../constants/constants.js'

class Dispatcher extends Component {
    /* state = { 
        modalOpen: false	
    } */
    constructor(props) {
        super(props);
        this.state = {
            dispatchers:[]
        }
        this.getDispatchers = this.getDispatchers.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("DISPATCHER","users");
        this.getDispatchers();
    }
    
    async getDispatchers() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/dispatchers',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            var tempDispatchers = [];

            result.dispatchers.forEach(dispatcher => {
                var finalDisp = {};

                finalDisp.id = dispatcher.id;

                finalDisp.name = dispatcher.User.last_name + ", " + dispatcher.User.first_name + " " + dispatcher.User.middle_name;

                finalDisp.email = dispatcher.User.email;
                finalDisp.contact_number = dispatcher.User.contact_number;

                fetch(`http://localhost:3000/v1/hubs/${dispatcher.hub_id}`, {
                    method: 'GET'
                }).then(response => {return response.json()})
                .then(result => { 
                    finalDisp.hub = result.hub.name + " (" + result.hub.code + ")";
                    finalDisp.updated = dispatcher.updated; 
                });
            
                fetch(`http://localhost:3000/v1/distribution-centers/${dispatcher.distribution_center_id}`, {
                    method: 'GET'
                }).then(response => {return response.json()})
                .then(result => {  finalDisp.dc = result.distribution_center.name + " (" + result.distribution_center.code + ")"});

                tempDispatchers.push(finalDisp); 
            });

            console.log(tempDispatchers);
            
            this.setState({dispatchers: tempDispatchers});

            setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)
        })
	 	.catch((err) => {
	 		console.log(err);
        })
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

    render() {
        return(
            <div>
                <GenericAddButton states={dispatcherFormStates} form={dispatcherFormItems} header_name="Dispatchers" url="http://localhost:3000/v1/dispatchers" updateView={this.getDispatchers} successMessage="Successfully added dispatcher!" type="dispatchers"/> 
                <Activation contentActItems={this.state.dispatchers} states={dispatcherFormStates} form={userUpdateFormItems} type="dispatchers" active={true} button1= "View Deactivated Dispatcher" button2="View Activated Dispatcher" url="http://localhost:3000/v1/dispatchers" updateView={this.getDispatchers} reasons={confirmationDeactivateForm} successMessage="Successfully updated dispatcher!"/>
            </div>
        )
    }
}

export default Dispatcher;