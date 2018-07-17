import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';

import { areaManagerFormStates, areaManagerFormItems, confirmationDeactivateForm, userUpdateFormItems} from '../constants/constants.js'

class AreaManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            area_managers:[],

        }
        this.getAreaManagers = this.getAreaManagers.bind(this);
    }

    componentDidMount(){
        this.props.handleHeaderChange("AREA MANAGER","users");
        this.getAreaManagers();

    }

    async getAreaManagers() {
        this.props.shouldToggleLoading(true);

		await fetch('http://localhost:3000/v1/area-managers',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            
            var tempAms = [];

            result.area_managers.forEach(manager => {
                var finalAm = {};
                
                finalAm.name = manager.User.last_name + ", " + manager.User.first_name + " " + manager.User.middle_name;

                finalAm.email = manager.User.email;
                finalAm.contact_number = manager.User.contact_number;

                fetch(`http://localhost:3000/v1/hubs/${manager.hub_id}`, {
                    method: 'GET'
                }).then(response => {return response.json()})
                .then(result => { 
                    finalAm.hub = result.hub.name + " (" + result.hub.code + ")";
                    finalAm.updated = manager.updated; 
                });
            
                fetch(`http://localhost:3000/v1/distribution-centers/${manager.distribution_center_id}`, {
                    method: 'GET'
                }).then(response => {return response.json()})
                .then(result => { finalAm.dc = result.distribution_center.name + " (" + result.distribution_center.code + ")"});

                finalAm.id = manager.id;

                tempAms.push(finalAm); 
            });

            console.log(tempAms);
            
            this.setState({area_managers: tempAms});

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
        const {header_name} = this.props
        return(
            <div>
                <GenericAddButton action={this.handleAddButton} states={areaManagerFormStates} form={areaManagerFormItems} header_name={header_name} url="http://localhost:3000/v1/area-managers" type="area-managers" updateView={this.getAreaManagers} successMessage="Successfully added area manager!"/> 
                <Activation contentActItems={this.state.area_managers} states={areaManagerFormStates} form={userUpdateFormItems} type="area-managers" active={true} button1= "View Deactivated Area Manager" button2="View Activated Area Manager" url="http://localhost:3000/v1/area-managers" type="area-managers" updateView={this.getAreaManagers} reasons={confirmationDeactivateForm} successMessage="Successfully updated area manager!"/>

            </div>
        )
    }
}

export default AreaManager;