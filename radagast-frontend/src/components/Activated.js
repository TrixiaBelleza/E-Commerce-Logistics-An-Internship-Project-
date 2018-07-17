import React, { Component } from 'react';
// import {Table} from 'semantic-ui-react';
import TableView from './TableView';

class Activated extends Component{
    
    render() {
      const {dummyData, tType, updateView, reasons, form, states, url, successMessage} = this.props;
      const result = dummyData.filter(data => data.deleted == null);
        return(     
              <TableView states={states} form={form} tableType={tType} status="active" sampData = {result} updateView={updateView} reasons={reasons} url={url} successMessage={successMessage}/>
        )
    }
}
export default Activated;