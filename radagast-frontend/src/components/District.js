import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {districtStates, districtFormItems, deact_laguna_districts, LocationDeacReasons} from '../constants/constants.js';

class District extends Component{
    constructor(props) {
        super(props);
        this.state = {
            districts:[]
        }
        this.getDistricts = this.getDistricts.bind(this);
    }
    componentDidMount(){
        this.props.handleHeaderChange("DISTRICT","map");
        this.getDistricts();
    }

    async getDistricts() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/lookups/districts',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.districts);
            var tempArr=[];
            result["districts"].forEach(district => {
                var tempObj = {};
                tempObj.id = district.id;
                tempObj.code = district.code;
                tempObj.name = district.name;
                
                tempObj.province= district.province.name + " ("+ district.province.code + ")";

                tempObj.region = district.province.region.name + " ("+ district.province.region.code + ")";

                tempObj.country= district.province.region.country.name + " ("+ district.province.region.country.code + ")";

                tempObj.created = district.created;
                tempObj.updated= district.updated;
                tempObj.deleted = district.deleted;


                tempArr.push(tempObj);
            });


            this.setState({districts: tempArr});

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
                    <GenericAddButton states={districtStates} form={districtFormItems} header_name="District" url="http://localhost:3000/v1/lookups/districts" updateView={this.getDistricts} successMessage="Successfully added district!" type="districts"/>
                    <Activation states={districtStates} form={districtFormItems} contentActItems={this.state.districts} contentDeactItems={deact_laguna_districts} type="districts" active={true} button1= "View Deactivated Districts" button2="View Activated Districts" updateView={this.getDistricts} reasons={LocationDeacReasons} successMessage="Successfully updated district!" url="http://localhost:3000/v1/lookups/districts"/>
                </Container>
            </div>
        )
    }

}
export default District;
