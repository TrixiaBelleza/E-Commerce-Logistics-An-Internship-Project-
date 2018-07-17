import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Authentication from './components/Authentication';

import Home from './components/Home';
import ConfirmationDialog from './components/ConfirmationDialog';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/login" render={() => (<Authentication/>)}/>
        <Route exact path="/confirm" render={() => (<ConfirmationDialog buttonName="Archive" headerTitle="Confirmation" modalContent="Are you sure you want to move to archive?" successMessage="Moved!"/>)}/>
        <Route path="/" component={Home}/>
      </div>
    )
  }
}
        

export default withRouter(App);
