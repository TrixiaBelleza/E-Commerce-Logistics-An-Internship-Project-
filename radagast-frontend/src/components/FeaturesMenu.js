import React, { Component } from 'react';
import { Sidebar, Menu, Accordion, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import '../styles/FeaturesMenu.css';

class FeaturesMenu extends Component{
    state = {
        visible: true,
        activeItem: this.props.menuItems[0].menuName
    }

    static getDerivedStateFromProps(props,current_state){
        if (current_state.visible !== props.shouldShowSidebar) {
            return {
                visible: props.shouldShowSidebar
            }
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const {menuItems} = this.props;
        const {visible, activeItem}=this.state;
        return(
                <Sidebar
                as={Menu}
                animation="push"
                visible={visible}
                vertical
                inverted>
                    {
                        menuItems.map(item => (
                            item.subMenu.length !== 0 ? 
                                <Menu.Item>
                                    <Accordion inverted >
                                        <Accordion.Title name={item.menuName} active={activeItem === item.menuName} onClick={this.handleItemClick}>
                                            <Icon name='dropdown' />
                                            <Icon name={item.icon} />
                                            {"                     "}
                                            {item.menuName}
                                        </Accordion.Title>
                                        <Accordion.Content active={activeItem === item.menuName}>
                                            <Menu.Menu>
                                            {
                                                item.subMenu.map(subItem => (

                                                    <Menu.Item name={subItem.name}>
                                                        <NavLink to={subItem.route}>
                                                            {subItem.name}
                                                        </NavLink>
                                                    </Menu.Item>
                                                ))
                                            }
                                            </Menu.Menu>
                                        </Accordion.Content>
                                    </Accordion>
                                </Menu.Item>
                            :
                            <NavLink to={item.route}>
                                <Menu.Item name={item.menuName} active={activeItem === item.menuName} onClick={this.handleItemClick}>
                                    
                                        <span>
                                        <Icon name={item.icon} />
                                        {"                     "}
                                        {item.menuName}
                                        </span>
                                    
                                </Menu.Item>
                            </NavLink>    
                        ))
                    }
                </Sidebar>
        )
    }
}

export default FeaturesMenu;