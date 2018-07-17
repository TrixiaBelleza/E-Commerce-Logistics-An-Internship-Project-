import React, { Component } from 'react';
import { Sidebar, Container, Icon, Header, Dimmer, Loader} from 'semantic-ui-react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Dashboard from './Dashboard';
import OrderManagement from './OrderManagement';
import Country from './Country';
import Region from './Region';
import Province from './Province';
import District from './District';
import SubDistrict from './SubDistrict';
import Barangay from './Barangay';
import FeaturesMenu from './FeaturesMenu';
import UsersMenu from './UsersMenu';
import ClientAccount from './ClientAccount';
import Hub from './Hub';
import CustomerSupport from './CustomerSupport';
import Zone from './Zone';

import {NotificationContainer} from 'react-notifications';

import '../styles/Home.css';
import Vehicles from './Vehicles';
import Dispatcher from './Dispatcher';
import DistributionCenter from './DistributionCenter';
import GenericDetails from './GenericDetails';
import Courier from './Courier';
import AreaManager from './AreaManager';
import {notifications, sidebarItems} from '../constants/constants.js';
import Pricing from './Pricing';

class Home extends Component{
    state={
        showSidebar: false,
        isLoading: true,
        currentHeader: "",
        headerIcon: ""
    }

    toggleLoading = (loading) => {
        this.setState({
            isLoading: loading
        })
    }

    toggleSidebar = (shouldShow) => {
        this.setState({
            showSidebar: shouldShow
        });
    }

    changeCurrentheader = (header, icon) => {
        this.setState({
            currentHeader: header,
            headerIcon: icon
        })
    }

    render(){
        const {showSidebar, currentHeader, headerIcon, isLoading}=this.state;
        return(
            <div className="main">
                <UsersMenu user="ADMIN" notifs={notifications} shouldToggleSidebar={this.toggleSidebar}/>
                <Sidebar.Pushable as={Container} fluid>
                    <FeaturesMenu menuItems={sidebarItems} shouldShowSidebar={showSidebar}/>
                    <Sidebar.Pusher>
                          <div className="placeholder">
                          <Dimmer active={isLoading} inverted>
                            <Loader size="large"/>
                        </Dimmer>
                            <div className="upperDiv">
                                <Container>
                                <Header as="h2">
                                    <Icon name={headerIcon} inverted/>
                                    <Header.Content>
                                        {currentHeader}
                                    </Header.Content>
                                </Header>
                                </Container>
                            </div>
                            <NotificationContainer/>

                            <div className="padded">
                            <Switch>
                                <Route path="/home/dashboard" render={() => (<Dashboard handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)} />

                                <Route path="/home/bookings" render={() => (<OrderManagement handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/clients" render={() => (<ClientAccount handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/distribution-center" render={() => (<DistributionCenter handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>
                        
                                <Route path="/home/details/:type/:id" render={(props) => (<GenericDetails {...props} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/countries"  render={() => (<Country handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/> )} />

                                <Route path="/home/regions"  render={() => (<Region handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/provinces"  render={() => (<Province handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)} />

                                <Route path="/home/districts"  render={() => (<District handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/sub-districts"  render={() => (<SubDistrict handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/barangays"  render={() => (<Barangay handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/hubs" render={()=> (<Hub handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/customer-supports"  render={() => (<CustomerSupport handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/zones"  render={() => (<Zone handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/couriers" render={() => (<Courier handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>

                                <Route path="/home/vehicles" render={() => (<Vehicles handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>
                                
                                <Route path="/home/dispatchers" render={() => (<Dispatcher header_name="Dispatcher" handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>
                                
                                <Route path="/home/pricings" render={() => (<Pricing handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>
                            
                                <Route path="/home/area-managers" render={() => (<AreaManager header_name="Area Manager" handleHeaderChange={this.changeCurrentheader} shouldToggleLoading={this.toggleLoading}/>)}/>
{/*                             <Route path="/home/paginate"render={() => (<Paginate/>)}/>
 */}                            </Switch>
                            </div>
                          </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default withRouter(Home);