import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {subdistrictStates, subdistrictFormItems, LocationDeacReasons} from '../constants/constants.js';

class SubDistrict extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subDistricts:[]
        }
        this.getSubDistricts = this.getSubDistricts.bind(this);
    }
    
    componentDidMount(){
        this.props.handleHeaderChange("SUB-DISTRICT","map");
        this.getSubDistricts();
    }

    async getSubDistricts() {
		await fetch('http://localhost:3000/v1/lookups/sub-districts',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.sub_districts);
            var tempArr=[];
            result["sub_districts"].forEach(sub_district => {
                var tempObj = {};
                tempObj.id = sub_district.id;
                tempObj.code = sub_district.code;
                tempObj.name = sub_district.name;
                
                tempObj.district =sub_district.district.name + " ("+ sub_district.district.code + ")"; 

                tempObj.province= sub_district.district.province.name + " ("+ sub_district.district.province.code + ")";

                tempObj.region = sub_district.district.province.region.name + " ("+ sub_district.district.province.region.code + ")";

                tempObj.country=sub_district.district.province.region.country.name + " ("+ sub_district.district.province.region.country.code + ")";

                tempObj.created = sub_district.created;
                tempObj.updated= sub_district.updated;
                tempObj.deleted = sub_district.deleted;


                tempArr.push(tempObj);
            });


            this.setState({subDistricts: tempArr});

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
                    <GenericAddButton action={this.handleAddButton} states={subdistrictStates} form={subdistrictFormItems} header_name="Sub-District" url="http://localhost:3000/v1/lookups/sub-districts" updateView={this.getSubDistricts} successMessage="Successfully added sub-district!" type="sub-districts"/>
                    <Activation states={subdistrictStates} form={subdistrictFormItems} contentActItems={this.state.subDistricts} type="sub-districts" active={true} button1= "View Deactivated Sub-Districts" button2="View Activated Sub-Districts" updateView={this.getSubDistricts} reasons={LocationDeacReasons} successMessage="Successfully updated sub-district!" url="http://localhost:3000/v1/lookups/sub-districts"/>
                </Container>
            </div>
        )
    }

}
export default SubDistrict;
