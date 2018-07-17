import React, { Component } from 'react';
import { Button, Container, Grid, Icon} from 'semantic-ui-react';
import Activated from './Activated';
import Deactivate from './Deactivate';

import '../styles/Activation.css';

import '../styles/Input.css';
import SearchField from './SearchField';
import {Dropdown} from 'semantic-ui-react';
import {courierSiteOptions} from '../constants/constants.js';


class Activation extends Component{
    state = { 
        active: this.props.active,
        button1: this.props.button1,
        button2: this.props.button2
    }

    handleView = () => {
        this.setState(() => ({
           active: this.state.active ? false:true   
        }))
    }

    render() {
        const { active, button1, button2} = this.state;
        const { contentActItems, contentSecActItems,updateView, type , reasons, form, states, url, successMessage} = this.props;
        return(
            <div>
                <Container>
                    <div style={{paddingBottom:"10px"}}>
                
                        <Grid columns="equal"> 
                        <Grid.Row>
                            <Grid.Column>
                         
                                <SearchField style={{marginTop: "5%"}}/>                               
                               
                            </Grid.Column>
                         
                            {(type=== "courier" || type==="vehicle") &&(
                                <Grid.Column>
                                
                                    <span>
                                    <Dropdown placeholder='Select Site'  selection options={courierSiteOptions}  style={{border:"1px solid gray",borderRadius:"5px"}}/>
                                    </span>
                            
                                </Grid.Column>
            
                            )}
                            {type=== "courier" &&(
                                <Grid.Column>
                                
                                    <span>
                                    <Dropdown placeholder='Select Zone'  selection options={courierSiteOptions}  style={{border:"1px solid gray",borderRadius:"5px"}}/>
                                    </span>
                            
                                </Grid.Column>
            
                            )}

                            <Grid.Column >
                                {
                                    type !== "bookings" && (
                                        <Button onClick={this.handleView} color={active ? "red" : "green"} floated="right"><Icon name={active ? "ban" : "check circle outline"} size='large'/>{active ? button1: button2}</Button>
                                    )
                                }
                                
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
            

                    </div>
                    {active ? 
                        <Activated states={states} form={form} dummyData={contentActItems} dummySecData={contentSecActItems} tType={type} updateView={updateView} reasons={reasons} url={url} successMessage={successMessage} isActive={active}/>
                        :
                        <Deactivate states={states} form={form} dummyData={contentActItems} dummySecData={contentSecActItems} tType={type} updateView={updateView} url={url} successMessage={successMessage} isActive={active}/>
                    }
                </Container>
            </div>
        )
    }
}

export default Activation;