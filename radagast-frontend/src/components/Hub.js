import React, { Component } from 'react';
import Activation from './Activation';
import GenericAddButton from './GenericAddButton';
import {sampHubActContents, sampHubDeactContents, hubStates, hubFormItems, SiteDeacReasons} from '../constants/constants.js';

class Hub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hubs:[]
        }
        this.getHubs = this.getHubs.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("HUBS","hubspot");
        this.getHubs();
    }

    async getHubs() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/hubs',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.hubs);
            this.setState({hubs: result.hubs});

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

    render(){
        return(
            <div>
            <GenericAddButton states={hubStates} form={hubFormItems} header_name="Hubs" url="http://localhost:3000/v1/hubs" updateView={this.getHubs} successMessage="Successfully added hub!" type="hubs"/>
            <Activation contentActItems={this.state.hubs} states={hubStates} form={hubFormItems} type="hubs" active={true} button1= "View Deactivated Hubs" button2="View Activated Hubs" updateView={this.getHubs} reasons={SiteDeacReasons} successMessage="Successfully updated hub!" url="http://localhost:3000/v1/hubs"/>
            </div>
        )
    }
}

export default Hub;