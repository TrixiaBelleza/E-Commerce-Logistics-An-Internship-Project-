import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';
import TablePopup from './TablePopup';
import {popupItems} from '../constants/constants.js';

import moment from 'moment';

class RowView extends Component{
    state={
        id:"",
        name: "",
        full_name: ""
    }

    handleChangeId = (idx, name) => {
        this.setState({
            id: idx,
            name: name
        })
    }
    render() {
        const {id, name} = this.state;
        const { rowType, rowData, rowDataStatus, updateView, reasons, states, form, url, successMessage} = this.props;
        const regexId = /^([created, deleted])?(.*[_id])?(client_account_number)?$/;
        const nameInvalid = ["countries", "regions", "provinces", "districts", "sub-districts", "barangays", "hubs", "dc", "client_account_number"];
        const nameValid = ["code", "account_number", "full_name", "plate_number"];
        return(
            <Table.Body> 
                        
                        {
                            (
                                rowData.map((data, idx) => <Table.Row>
                                {
                                    (
                                        rowType==="bookings" && (
                                            <Table.Cell><Link to={`/home/details/${rowType}/${data.id}`} style={{fontWeight: "bolder"}}>{(idx+1).toString().padStart(9, "0")}</Link></Table.Cell>
                                        )
                                    )
                                }
                                {
                                    Object.getOwnPropertyNames(data).map((property, index)=>( 
                                           
                                            (nameValid.includes(property) || (!nameInvalid.includes(rowType) && property==="name") ? (
                                                <Table.Cell><Link to={`/home/details/${rowType}/${data.id}`} style={{fontWeight: "bolder"}}>{Object.values(data)[index]}</Link></Table.Cell>
                                            )
                                            : ((!regexId.test(property) || property==="updated") && (
                                                <Table.Cell>{(Object.values(data)[index] === null || Object.values(data)[index] === "") ? "N/A" : 
                                                (
                                                    property==="updated" ? moment(Object.values(data)[index]).format('MMMM DD, YYYY') : 
                                                        Object.values(data)[index]       
                                                )
                                                }</Table.Cell>
                                            ))
                                            )
                                        
                                    ))
                                }
                                
                                <Table.Cell collapsing style={{borderColor: "transparent"}} onClick={() => {this.handleChangeId(data.id, data.name)}}>
                                    <TablePopup states={states} form={form} name={name} dataId={id} rowType = {rowType} rowDataStatus={rowDataStatus} popupItems={popupItems} updateView={updateView} reasons={reasons} url={url} successMessage={successMessage}/>
                                </Table.Cell>
                            </Table.Row>)
                            )

                        }         
            </Table.Body>
        )
    }
}
export default RowView;
