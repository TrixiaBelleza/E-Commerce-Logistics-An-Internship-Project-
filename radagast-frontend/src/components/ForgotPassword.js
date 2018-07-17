import React, { Component } from 'react';
import { Modal, Button, Icon, Label, Form } from 'semantic-ui-react';
import {NotificationManager} from 'react-notifications';

import TextField from './TextField.js';

class ForgotPassword extends Component {
	state = { modalOpen: false,
			  email:"",
			  errorCheck: "",
			  hasError: false	
			}

  	handleOpen = () => this.setState({ modalOpen: true })
  	handleClose = () => {
  		this.setState({ modalOpen: false })
  		this.setState({ errorCheck: ""})
	  }
  	handleEmailInput = (name, value) => this.setState({ [name]: value })
  	handleSubmit = async (e) => {
		const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  		if(this.state.email === "" || !regex.test(this.state.email)) {
  			await this.setState({ hasError: true, errorCheck:"INVALID!"});
  		} else {
  			const email = this.state.email;
        	NotificationManager.success(email, 'Successfully sent email to');
  			this.handleClose();
  		}
  	}

  	render() {
    	return (
    		<div>
	      		<Modal
	        	trigger={<Label as="a" size="large" onClick={this.handleOpen}> {this.props.text} </Label>}
	        	open={this.state.modalOpen}
	        	onClose={()=>{
					this.handleClose();
					}
				}
				onUnmount={
					()=>{
						this.setState({
							hasError: false
						})
					}
				}
	        	size='mini'
	        	closeIcon={true}
	        	centered={false}
	      		>
		        	<Modal.Header>{this.props.header}</Modal.Header>
		        	<Modal.Content>
		        			<p>Please provide your email address and we will send a reset password link to your account.</p>
				        	<Form>
							<TextField label="Email Address" name="email" type="email" placeholder="Email" isRequired={true} changeHandler={this.handleEmailInput}hasError={this.state.hasError}/>
							{
								this.state.hasError && (
									<Label color="red" floating>
        								{this.state.errorCheck}
      								</Label>
								)
							}
							</Form>
		        	</Modal.Content>
		        	<Modal.Actions>
		        		<Button color='red' onClick={this.handleClose}>
		            		<Icon name='times' /> Cancel
		          		</Button>
		          		<Button color='green' onClick={this.handleSubmit}>
		            		<Icon name='checkmark' /> Submit
		          		</Button>
		        	</Modal.Actions>
		      	</Modal>
		    </div>
    	)
  	}
	
}

export default ForgotPassword;