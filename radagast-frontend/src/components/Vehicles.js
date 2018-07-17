import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';

import {sampActVehicles, sampDeactVehicles, sampFormStatesVehicle, sampFormItemsVehicle} from '../constants/constants.js'

class Vehicles extends Component {
    state = { 
        modalOpen: false	
    }

    componentDidMount(){
        this.props.handleHeaderChange("VEHICLE","truck");
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

    render() {
        return(
            <div>
                <GenericAddButton states={sampFormStatesVehicle} form={sampFormItemsVehicle} header_name="Vehicles" url="api/submit"/> 
                <Activation contentActItems={sampActVehicles} contentDeactItems={sampDeactVehicles} type="vehicles" active={true} button1= "View Deactivated Vehicles" button2="View Activated Vehicles"/>
            </div>
        )
    }
}

export default Vehicles;