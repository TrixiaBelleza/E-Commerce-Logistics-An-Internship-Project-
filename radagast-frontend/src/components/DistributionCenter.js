import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import {sampDCFormItems, dcSampActContents, dcSampDeactContents, dcFormStates, SiteDeacReasons} from '../constants/constants.js';

class DistributionCenter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            distribution_centers:[]
        }
        this.getDistributionCenters = this.getDistributionCenters.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("DISTRIBUTION CENTER","building");
        this.getDistributionCenters();
    }

    async getDistributionCenters() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/distribution-centers',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.distribution_centers);
            this.setState({distribution_centers: result.distribution_centers});

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
            <GenericAddButton updateView={this.getDistributionCenters} action={this.handleAddButton} states={dcFormStates} form={sampDCFormItems} header_name="DC" url="http://localhost:3000/v1/distribution-centers" updateView={this.getDistributionCenters} successMessage="Successfully added distribution center!" type= "dc"/> 
			<Activation updateView={this.getDistributionCenters} contentActItems={this.state.distribution_centers}  states={dcFormStates} form={sampDCFormItems} type="dc" active={true} button1= "View Deactivated DC'S" button2="View Activated DC'S" reasons={SiteDeacReasons} successMessage="Successfully updated distribution center!" url="http://localhost:3000/v1/distribution-centers" />
            </div>
        )
    }
}
export default DistributionCenter;