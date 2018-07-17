import React, { Component } from 'react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';
import { Container} from 'semantic-ui-react';

import {zoneStates, zoneFormItems, zone_list, deact_zone_list, ZoneDeacReasons} from '../constants/constants.js';

class Zone extends Component{
    componentDidMount(){
        this.props.handleHeaderChange("ZONE","globe");
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }
    
    render(){
        return(
            <div>
                <Container>
                    <GenericAddButton states={zoneStates} form={zoneFormItems} header_name="Zone" url="api/submit"/>
                    
                    <Activation contentActItems={zone_list} contentDeactItems={deact_zone_list} type="zones" active={true} button1= "View Deactivated Zones" button2="View Activated Zones" reasons={ZoneDeacReasons}/>
                </Container>
            </div>
        )
    }
}

export default Zone;