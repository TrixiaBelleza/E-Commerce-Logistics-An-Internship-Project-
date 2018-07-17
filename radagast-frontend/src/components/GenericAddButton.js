import React, { Component } from 'react';
import { Modal, Button, Icon} from 'semantic-ui-react';

import GenericForm from './GenericForm.js';

class GenericAddButton extends Component {
	state = {
			 modalOpen:false
			}

	handleAction = () => {
		this.setState({modalOpen:true});
	}
	handleClose = () => {
		this.setState({modalOpen:false});
	}

	render() {
		const {url, updateView, successMessage, header_name, type} = this.props
		return (
			<div className="genericAddButton">
				<Button onClick={this.handleAction} circular icon={<Icon size="big" name="plus" inverted circular fitted/>} floated="right" size="large" style={{color:"black", backgroundColor:"black", padding:"0px", marginTop:"-5%", borderRadius:"100%"}}/>
				<Modal open={this.state.modalOpen} onClose={this.handleClose} size={header_name==="Accounts" ?"large" : "mini"}>
					<Modal.Header>Add {this.props.header_name}</Modal.Header>
					<GenericForm formItems={this.props.form} states={this.props.states} cancel={this.handleClose} url={url} updateView={updateView} successMessage={successMessage} type={type}/>
				</Modal>
			</div>
		)
	}
}

export default GenericAddButton;

