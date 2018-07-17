import React, { Component } from 'react';
import { Label, Menu, List, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../styles/UsersMenu.css';
import {userMenuItems} from '../constants/constants.js';

class UsersMenu extends Component {
    state={
        shouldShowSidebar: false,
        userMenu: {
            user: "DEFAULT",
            menuItems: []
        }
    }

    componentDidMount(){
        this.setState({
            userMenu: userMenuItems.find(
                (item) => {
                    return (item.user === this.props.user);
                }
            )
        });
    }

    toggleSidebar(){
        var shouldShow = !this.state.shouldShowSidebar
    
        this.props.shouldToggleSidebar(shouldShow);

        this.setState({
            shouldShowSidebar: shouldShow
        });
    }

    render(){
        const {userMenu}= this.state;
        const {notifs}=this.props;
        return(
            <div>
                <div className="main-bar">
                   <Menu icon className="semantic-bar" inverted>
                        <Menu.Item onClick={()=>{
                                this.toggleSidebar();
                            }}>
                                <Icon name="bars" size="big"/>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Icon name="bell" size="large" style={{marginRight: "-2%"}}/>
                                {
                                    notifs.length !== 0 && (
                                        <Label color="red" style={{marginLeft: "-2%"}}>
                                            !
                                        </Label>
                                    )
                                }
                                <Dropdown scrolling>
                                    <Dropdown.Menu style={{marginTop: "80%", width: "25vw", padding: "105%"}} >
                                        <List relaxed divided >
                                        {
                                            notifs.slice(0,10).map(notif=>(
                                                <List.Item style={{width: "100%"}} as="a">
                                                    <Icon name="exclamation" size='big' fitted/>
                                                    <List.Content style={{textAlign: "left"}}>
                                                        <NavLink to={notif.route}>
                                                            <List.Header>{notif.title}</List.Header>
                                                            <List.Description>
                                                            <Icon name="clock outline"/>
                                                                {notif.time}
                                                            </List.Description>
                                                        </NavLink>
                                                    </List.Content>
                                                    <hr/>
                                                </List.Item>
                                            ))
                                        }
                                         </List>
                                        <span style={{float: 'right'}}>
                                            <NavLink to="/notifications">VIEW ALL...</NavLink>
                                        </span>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name="user circle" size="big" />
                                <Dropdown text={userMenu.user} className="user-icon">
                                    <Dropdown.Menu style={{marginTop: "20%", marginRight: "-15%"}}>
                                        {
                                            userMenu.menuItems.map(item=>(
                                                <Dropdown.Item>
                                                    <Icon name={item.icon}/>
                                                    <NavLink to={item.route} style={{color: "black"}}>
                                                        {item.name}
                                                    </NavLink>
                                                </Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                   </Menu>
                </div>
            </div>
        )
    }
}

export default UsersMenu;