import React, { Component } from 'react';
import { Form, Label, Icon } from 'semantic-ui-react';

class DataList extends Component {
	state = {
			 value:"",
			 listValues: [],
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

	componentDidMount(){
		const {origin, values, parentComp} = this.props;
		console.log(origin)
		if(origin === undefined){
			this.setState({
				listValues: values
			})
		}else{
			var tempOrigin = origin;
			var url = '';
			
			var lookups= ["countries", "regions", "provinces", "districts", "sub-districts", "barangays", "prices"];

			if(origin === "subdistricts"){
				tempOrigin = "sub-districts";
			}
			else if(origin === "distribution_centers"){
				tempOrigin = "distribution-centers";
			}
			else if(origin === "customer_supports"){
				tempOrigin = "customer-supports";
			}
			if(lookups.includes(tempOrigin)){
				url= "http://localhost:3000/v1/lookups/"+ tempOrigin;
			}
			else if(tempOrigin=== "clients" || tempOrigin=== "hubs" || tempOrigin=== "distribution-centers"){
				url= "http://localhost:3000/v1/"+ tempOrigin;
			}
			else{
				url= "http://localhost:3000/v1/"+ tempOrigin;
			}
			console.log(url)
			fetch(url,{
				method: 'GET'
			})
			.then((response) => { return response.json() })
			.then((result) => {
				console.log(result);
				var tempArray = [];

				if(tempOrigin === "sub-districts"){
					tempOrigin = "sub_districts";
				}
				else if(tempOrigin === "distribution-centers"){
					tempOrigin = "distribution_centers";
				}else if(tempOrigin === "clients"){
					tempOrigin ="client";
				}
				else if(tempOrigin === "customer-supports"){
					tempOrigin = "customer_supports";
				}

				console.log(parentComp, tempOrigin);

				console.log(result[tempOrigin])
				result[tempOrigin].forEach((element, index) => {
					if(element.deleted == null){
						if(tempOrigin==="client"){
							tempArray.push({
								key: index,
								text: element.client_account_number,
								value: element.client_account_number
							});
						}
						else if(parentComp === "hubs" || (parentComp === "dc" && tempOrigin !== "hubs")){
							tempArray.push({
								key: index,
								text: element.name + " (" + element.code + ")",
								value: element.code
							});
						}else{
							tempArray.push({
								key: index,
								text: element.name + " (" + element.code + ")",
								value: element.id
							});
						}
					}

					this.setState({
						listValues: tempArray
					})
				})
			})
			.catch((err) => {
				console.log(err);
			})
	}		
	}

	handleClick = async (e,data) => {	
		var tempName=data.name, tempVal=data.value;

		console.log(tempName, tempVal);
		await this.props.changeHandler(tempName, tempVal);
		await this.setState({value: tempVal});

	}

	render() {
		const {value, listValues, didSubmit} = this.state;
		const {name, label, placeholder, className, isRequired, hasError} = this.props;
		return (
				<Form.Field required={isRequired}>
					{
						(hasError && !didSubmit && (
							<Label ribbon="right" size="tiny" color="red" 
							style={{transform: "translate(-100%,60%)", marginTop: "-50px"}}> 
								<Icon name="x" />INVALID INPUT
							</Label>
						))
					}
					<label className={className}>{label.toUpperCase()}</label>
					<Form.Select 
					fluid 
					search
					name={name}
					options={listValues} 
					placeholder={placeholder} 
					value={value} 
					onChange={this.handleClick}
					error={hasError}  style={{border:"1px solid rgba(0, 0, 0, .35)",borderRadius:"5px"}}/> 	
				</Form.Field>
		)
	}
}

export default DataList;