import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {regionStates, regionFormItems, LocationDeacReasons} from '../constants/constants.js';

class Region extends Component{
    constructor(props) {
        super(props);
        this.state = {
            regions:[]
        }
        this.getRegions = this.getRegions.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("REGION","map");
        this.getRegions();
    }

    async getRegions() {
        this.props.shouldToggleLoading(true);
        
		await fetch('http://localhost:3000/v1/lookups/regions',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
      //      console.log(result.countries);
            var tempArr=[];
            result["regions"].forEach(region => {
                var tempObj = {};
                tempObj.id = region.id;
                tempObj.code = region.code;
                tempObj.name = region.name;

                tempObj.country=region.country.name + " ("+ region.country.code + ")";

                tempObj.created = region.created;
                tempObj.updated= region.updated;
                tempObj.deleted = region.deleted;


                tempArr.push(tempObj);
            });


            this.setState({regions: tempArr});

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
                    <GenericAddButton states={regionStates} form={regionFormItems} header_name="Region" url="http://localhost:3000/v1/lookups/regions" updateView={this.getRegions} successMessage="Successfully added region!" type="regions"/>
                    <Activation states={regionStates} form={regionFormItems} contentActItems={this.state.regions} type="regions" active={true} button1= "View Deactivated Regions" button2="View Activated Regions" updateView={this.getRegions} reasons={LocationDeacReasons} successMessage="Successfully updated region!" url="http://localhost:3000/v1/lookups/regions"/>
                </Container>
            </div>
        )
    }

}
export default Region;
