import React, { Component } from 'react';
import { Form, Input, Icon, Label } from 'semantic-ui-react';

import '../styles/Input.css';

class TextField extends Component {

	state = {
		value: "",
		didSubmit: false
	}

	componentWillReceiveProps(props){
		const {isLoading, isUpdate} = this.props;
		if(isLoading !== props.isLoading){
			if(isUpdate){
				var tempName=props.name, tempVal=props.value, tempSubmit=props.didSubmit;

				this.props.changeHandler(tempName, tempVal);
				this.setState({
					value: tempVal,
					didSubmit: tempSubmit
				});
			}
		}
	}

	handleChangeValue = async (e) => {
		var tempName=e.target.name, tempVal=e.target.value;

		console.log(tempName, tempVal);

		await this.props.changeHandler(tempName, tempVal);
		await this.setState({value: tempVal});
	}

	render() {
		const {value, didSubmit} = this.state;
		const {name, label, type, placeholder, className, isRequired, hasError, iconName, isUpdate} = this.props;
		return(
				<Form.Field required={isRequired}>
					{
						((isUpdate !== undefined ? true : false) && value !== "" && !didSubmit)&& (
							<Label as="a" ribbon="right" size="tiny" color="blue"
							onClick={()=>{
								this.setState({
									value: ""
								}, this.props.changeHandler(name, ""))
								
							}} 
							style={{transform: "translate(-100%,60%)", marginTop: "-50px"}}> 
								<Icon name="erase" />CLEAR
							</Label>
						)
					}

					{
						(hasError && !didSubmit && (
							<Label ribbon="right" size="tiny" color="red" 
							style={{transform: "translate(-100%,60%)", marginTop: "-50px"}}> 
								<Icon name="x" />INVALID INPUT
							</Label>
						))
					}

					<label className={className}>{label.toUpperCase()}</label>
					<Input 
					name={name} 
					type={type}
					placeholder = {placeholder}
					onChange = {this.handleChangeValue}
					value={value}
					error={hasError}
					icon={iconName} style={{border:"1px solid rgba(0, 0, 0, .35)",borderRadius:"5px"}}/>
					
				</Form.Field>
		)
	}
}

export default TextField;