import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {pricingFormStates, pricingFormItems, sampActPricing, LocationDeacReasons, countryFormItems} from '../constants/constants.js';

class Pricing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pricings:[]
        }
        this.getPricings = this.getPricings.bind(this);
  
    }
    
    componentDidMount(){
        this.props.handleHeaderChange("PRICING","money bill alternate outline");
        this.getPricings();
        
    }

    async getPricings() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/lookups/prices',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.prices);
            this.setState({pricings: result.prices});

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
                <Container>
                    <GenericAddButton states={pricingFormStates} form={pricingFormItems} header_name="Pricing" url="http://localhost:3000/v1/lookups/prices" updateView={this.getPricings} successMessage="Successfully added price!" type= "pricings"/>
                    <Activation states={pricingFormStates} form={pricingFormItems} contentActItems={this.state.pricings}  active={true} button1= "View Deactivated Pricings" button2="View Activated Pricings" updateView={this.getPricings} reasons={LocationDeacReasons} successMessage="Successfully updated price!" url="http://localhost:3000/v1/lookups/prices" type="pricings"/>
                </Container>
            </div>
        )
    }

}
export default Pricing;
