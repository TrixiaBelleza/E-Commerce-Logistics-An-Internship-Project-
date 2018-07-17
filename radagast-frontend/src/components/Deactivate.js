import React, { Component } from 'react';
import TableView from './TableView';
class Deactivate extends Component{

    render() {
        const {dummyData, tType, updateView, states, form, url, successMessage} = this.props;
        const result = dummyData.filter(data => data.deleted != null);
        return(
         
              <TableView states={states} form={form} tableType={tType} status="inactive" sampData= {result} updateView={updateView} url={url} successMessage={successMessage}/>

        )
    }
}
export default Deactivate;