import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {countryStates, countryFormItems, LocationDeacReasons} from '../constants/constants.js';

class Country extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries:[]
        }
        this.getCountries = this.getCountries.bind(this);
    }
    
    componentDidMount(){
        this.props.handleHeaderChange("COUNTRY","map");
        this.getCountries();
    }

    async getCountries() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/lookups/countries',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.countries);
            var tempArr=[];
            result["countries"].forEach(country => {
                var tempObj = {};
                tempObj.id = country.id;
                tempObj.code = country.code;
                tempObj.name = country.name;

                tempObj.created = country.created;
                tempObj.updated= country.updated;
                tempObj.deleted = country.deleted;


                tempArr.push(tempObj);
            });


            this.setState({countries: tempArr});

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
                    <GenericAddButton states={countryStates} form={countryFormItems} header_name="Country" url="http://localhost:3000/v1/lookups/countries" updateView={this.getCountries} successMessage="Successfully added country!" type="countries"/>
                    <Activation states={countryStates} form={countryFormItems} contentActItems={this.state.countries} type="countries" active={true} button1= "View Deactivated Countries" button2="View Activated Countries" updateView={this.getCountries} reasons={LocationDeacReasons} successMessage="Successfully updated country!" url="http://localhost:3000/v1/lookups/countries"/>
                </Container>
            </div>
        )
    }

}
export default Country;
