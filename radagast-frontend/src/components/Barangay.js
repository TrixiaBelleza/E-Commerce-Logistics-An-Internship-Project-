import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {barangayStates, barangayFormItems, LocationDeacReasons} from '../constants/constants.js';

class Barangay extends Component{
    constructor(props) {
        super(props);
        this.state = {
            barangays:[]
        }
        this.getBarangays = this.getBarangays.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("BARANGAY","map");
        this.getBarangays();
    }

    async getBarangays() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/lookups/barangays',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.barangays);
            var tempArr=[];
            result["barangays"].forEach(barangay => {
                var tempObj = {};
                tempObj.id = barangay.id;
                tempObj.code = barangay.code;
                tempObj.name = barangay.name;
                
                tempObj.sub_district = barangay.sub_district.name + " ("+ barangay.sub_district.code + ")";

                tempObj.district =barangay.sub_district.district.name + " ("+ barangay.sub_district.district.code + ")"; 

                tempObj.province= barangay.sub_district.district.province.name + " ("+ barangay.sub_district.district.province.code + ")";

                tempObj.region = barangay.sub_district.district.province.region.name + " ("+ barangay.sub_district.district.province.region.code + ")";

                tempObj.country=barangay.sub_district.district.province.region.country.name + " ("+ barangay.sub_district.district.province.region.country.code + ")";

                tempObj.created = barangay.created;
                tempObj.updated= barangay.updated;
                tempObj.deleted = barangay.deleted;

                tempArr.push(tempObj);
            });
           this.setState({barangays: tempArr});

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
                    <GenericAddButton states={barangayStates} form={barangayFormItems} header_name="Barangay" url="http://localhost:3000/v1/lookups/barangays" updateView={this.getBarangays} successMessage="Successfully added barangay!" type="barangays"/>
                    <Activation states={barangayStates} form={barangayFormItems} contentActItems={this.state.barangays} type="barangays" active={true} button1= "View Deactivated Barangays" button2="View Activated Barangays" updateView={this.getBarangays} reasons={LocationDeacReasons} successMessage="Successfully updated barangay!" url="http://localhost:3000/v1/lookups/barangays"/>
                </Container>
            </div>
        )
    }

}
export default Barangay;
