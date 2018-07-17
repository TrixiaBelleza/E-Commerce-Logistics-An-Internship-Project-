import React, { Component } from 'react';
import {Popup, Button, Icon, Modal} from 'semantic-ui-react';
import ConfirmationDialog from './ConfirmationDialog';

import {reasonState, confirmationReassignCourForm, countryStates, countryFormItems, LocationDeacReasons} from '../constants/constants.js';
import GenericUpdateForm from './GenericUpdateForm';

var pluralize = require('pluralize');

class TablePopup extends Component{
    
    state={
        didUpdate: false,
        didDeActivate: false,
        didConfirmYes: false,
        isOpen: false,
        modalHeader: "",
        modalContent: "",
        type: "",
        itemsToMap: [],
        successMessage: ""
    }

    handleDeActivate = (val) => {
        this.setState({
            didDeActivate: val,
            isOpen: !this.state.isOpen
        })
    }

    handlePopupClose = () => {
        this.setState({
            isOpen: false
        })
    }

    handlePopupOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleConfirmYes = (val) => {
        this.setState({
            didConfirmYes: val
        })
    }

    handleUpdateItem = () => {
        this.setState({didUpdate: !this.state.didUpdate});
        
    }

    handleClose = () => {
        this.setState({didUpdate: false});
    }

    render() {
        const {didDeActivate, isOpen, modalHeader, modalContent, type, itemsToMap} = this.state;
        const { rowType, rowDataStatus, popupItems, dataId, updateView, reasons, name, states, form, url, successMessage} = this.props;
        return(
            <div>  
                <ConfirmationDialog openModal={didDeActivate} headerTitle={modalHeader} modalContent={modalContent} handleCloseModal={this.handleDeActivate} handlePopupClose={this.handlePopupClose} handleType={type} formItems={itemsToMap} states={reasonState} updateView={updateView} reasons={reasons} successMessage={this.state.successMessage} name={name} dataId={dataId} rowType={rowType}/>
                
                <Modal open={this.state.didUpdate} onClose={this.handleUpdateItem} size="mini">
                    
                    <Modal.Header>Update {pluralize.singular(rowType).slice(0,1).toUpperCase() + pluralize.singular(rowType).slice(1)}</Modal.Header>
					<GenericUpdateForm formItems={form} states={states} isUpdate={true} type={rowType} dataId={dataId} url={url} updateView={updateView} cancel={this.handleClose} successMessage={successMessage}/>
				</Modal>

                <Popup
                    open={isOpen}
                    onOpen={this.handlePopupOpen}
                    onClose={this.handlePopupClose}
                    trigger={ <Button icon><Icon name='ellipsis vertical' /></Button>}    
                    position='bottom right'
                    on="click"
                    hideOnScroll> 
                    {popupItems.map(item=> 
                        item.type === rowType &&(
                            item.subContents.map(subItem => 
                                subItem.status !== "active" && subItem.status !== "inactive" &&(
                                <div>
                                
                                <span>
                                {
                                subItem.name === "Reassign Vehicle" && (
                                    <Button onClick={()=>{
                                        this.handleDeActivate(true);
                                        this.setState({ 
                                            modalHeader: "Reassign Vehicle",
                                            modalContent: "Are you sure you want to reassign courier to vehicle?",
                                            type: "Reassign Vehicle"
                                        });
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                                }  
                                 {
                                subItem.name === "Reassign Zone" && (
                                    <Button onClick={()=>{
                                        this.handleDeActivate(true);
                                        this.setState({ 
                                            modalHeader: "Reassign Zone",
                                            modalContent: "Are you sure you want to reassign courier to zone?",
                                            type: "Reassign Zone"
                                        });
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                                }  
                                {
                                subItem.name === "Unassign Courier" && (
                                    <Button onClick={()=>{
                                        this.handleDeActivate(true);
                                        this.setState({ 
                                            modalHeader: "Unassign Courier",
                                            modalContent: "Are you sure you want to unassign courier?",
                                            type: "Unassign Courier"
                                        });
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                                }   
                                 {
                                subItem.name === "Reassign Courier" && (
                                    <Button onClick={()=>{
                                        this.handleDeActivate(true);
                                        this.setState({ 
                                            modalHeader: "Reassign Courier",
                                            modalContent: "",
                                            type: "Reassign Courier",
                                            itemsToMap: confirmationReassignCourForm
                                        });
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                                }
                                {
                                subItem.name === "Update" && (
                                    <Button onClick={()=>{
                                       this.handlePopupClose();
                                       this.handleUpdateItem();
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                                }
                                {
                                subItem.name === "Cancel" && (
                                    <Button 
                                    onClick={()=>{
                                        this.handleDeActivate(true)
                                        this.setState({
                                            modalHeader: "Cancel",
                                            modalContent: "Are you sure you want to cancel?",
                                            type: "Delete",
                                            itemsToMap: reasons,
                                            successMessage: "Successfully cancelled!",
                                            name: name
                                        })   
                                        
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                                }   
                                </span>
                                <br/>
                                </div>
                            
                            )) 
                        )
                    )}   
                     {popupItems.map(item=> 
                        
                        item.type === rowType  &&(
                            item.subContents.map(subItem => 
                                rowDataStatus === subItem.status && (
                            <div>
                            <span>
                            {
                                subItem.name === "Deactivate" && (
                                    <Button 
                                    onClick={()=>{
                                        this.handleDeActivate(true)
                                        this.setState({
                                            modalHeader: "Deactivate",
                                            modalContent: "Are you sure you want to deactivate?",
                                            type: "Deactivate",
                                            itemsToMap: reasons,
                                            successMessage: " has been successfully deactivated!",
                                            name: name
                                        })
                                        
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                            }
                            {
                                subItem.name === "Activate" && (
                                    <Button onClick={()=>{
                                        this.handleDeActivate(true)
                                        this.setState({
                                            modalHeader: "Activate",
                                            modalContent: "Are you sure you want to activate?",
                                            type: "Activate",
                                            successMessage: " has been successfully activated!",
                                            name: name
                                        });   
                                    }} style={{backgroundColor: "transparent"}}>  <Icon name={subItem.icon} />{subItem.name}</Button>
                                )
                            }
                            </span>
                            <br/>
                            </div>
                          )  ))
                    )}                       
                 </Popup>
                 {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>
        )
    }
}
export default TablePopup;