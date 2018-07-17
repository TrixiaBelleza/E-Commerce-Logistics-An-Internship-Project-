import React, { Component } from 'react';
import {Table} from 'semantic-ui-react';
import RowView from './RowView';
import {generalTable, deactGeneralTable} from '../constants/constants.js';
import Paginate from './Paginate';

class TableView extends Component{
    render() {
        const {tableType, status, sampData, updateView, reasons, states, form, url, successMessage} = this.props;
        return(
            <div>
                  <Table structured celled style={{marginTop:"1%"}}>
                  <Table.Header >
                    <Table.Row>
                    { status === "active" && (
                        generalTable.map(item => ( 
                            
                                item.type === tableType && (      
                                        
                                            item.header.map(subItem => (
                                            
                                                <Table.HeaderCell style={{backgroundColor: "#FF8C00", color: "white"}}>
                                                    {subItem}
                                                </Table.HeaderCell>
                                            
                                            ))
                                    
                                )
                        
                               
                        ))
                    )}
                    { status === "inactive" && (
                        deactGeneralTable.map(item => ( 
                            
                                item.type === tableType && (      
                                        
                                            item.header.map(subItem => (
                                            
                                                <Table.HeaderCell style={{backgroundColor: "#FF8C00", color: "white"}}>
                                                    {subItem}
                                                </Table.HeaderCell>
                                            
                                            ))
                                    
                                )
                        
                               
                        ))
                    )}
                </Table.Row>
                 </Table.Header> 
                    <RowView states={states} form={form} rowType = {tableType} rowData = {sampData} rowDataStatus = {status} updateView={updateView} reasons={reasons} url={url} successMessage={successMessage}/>
                 </Table>
                 <Paginate/>
            </div>
        )
    }
}
export default TableView;