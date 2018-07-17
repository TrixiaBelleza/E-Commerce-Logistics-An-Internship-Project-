import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {provinceStates, provinceFormItems, deact_province_list, LocationDeacReasons} from '../constants/constants.js';

class Province extends Component{
    constructor(props) {
        super(props);
        this.state = {
            provinces:[]
        }
        this.getProvinces = this.getProvinces.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("PROVINCE","map");
        this.getProvinces();
    }

    handleAddButton = () => {
		console.log("Add");
    }
    async getProvinces() {   
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/lookups/provinces',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.provinces);
            var tempArr=[];
            result["provinces"].forEach(province => {
                var tempObj = {};
                tempObj.id = province.id;
                tempObj.code = province.code;
                tempObj.name = province.name;
                
                tempObj.region = province.region.name + " ("+ province.region.code + ")";

                tempObj.country=province.region.country.name + " ("+ province.region.country.code + ")";

                tempObj.created = province.created;
                tempObj.updated= province.updated;
                tempObj.deleted = province.deleted;


                tempArr.push(tempObj);
            });



            this.setState({provinces: tempArr});

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
                    <GenericAddButton states={provinceStates} form={provinceFormItems} header_name="Province" url="http://localhost:3000/v1/lookups/provinces" updateView={this.getProvinces} successMessage="Successfully added province!" type="provinces"/>
                    <Activation states={provinceStates} form={provinceFormItems} contentActItems={this.state.provinces} contentDeactItems={deact_province_list} type="provinces" active={true} button1= "View Deactivated Provinces" button2="View Activated Provinces" updateView={this.getProvinces} reasons={LocationDeacReasons} successMessage="Successfully updated province!" url="http://localhost:3000/v1/lookups/provinces"/>
                </Container>
            </div>
        )
    }

}
export default Province;
