import React, { Component } from 'react';

import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import {sampFormItems, sampActContents, sampDeactContents, sampFormStates, AccountDeacReasons} from '../constants/constants.js';

class ClientAccount extends Component {
	constructor(props) {
        super(props);
        this.state = {
            clients:[]
        }
        this.getClients = this.getClients.bind(this);
	}
	
	componentDidMount(){
		this.props.handleHeaderChange("CLIENT ACCOUNTS","address book");
		this.getClients();
    }

	componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

	render() {
		return (
			<div>
				<GenericAddButton states={sampFormStates} form={sampFormItems} header_name="Client Accounts" url="http://localhost:3000/v1/clients" updateView={this.getClients} successMessage="Successfully added client account!" type="clients"/> 
				<Activation contentActItems={this.state.clients} type="clients" active={true} button1= "View Deactivated Client Accounts" button2="View Activated Client Accounts" updateView={this.getClients} reasons={AccountDeacReasons} successMessage="Successfully updated client account!" url="http://localhost:3000/v1/clients"/>
			</div>
		) 
	}
}

export default ClientAccount;