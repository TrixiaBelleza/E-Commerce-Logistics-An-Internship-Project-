import React, { Component, Fragment } from 'react';
import {Button, Icon, Table, Header} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';

var pluralize = require('pluralize');
var flatten = require('flat')

class GenericDetails extends Component{
    
    constructor(props){
		super(props);

		this.state = {
            type: this.props.match.params.type,
            id: this.props.match.params.id,
            details: {}
        }
    }

    // SOURCE: https://coderwall.com/p/w22s0w/recursive-merge-flatten-objects-in-plain-old-vanilla-javascript
    // merge = (objects) => {
    //     var out = {};
      
    //     for (var i = 0; i < objects.length; i++) {
    //       for (var p in objects[i]) {
    //         out[p] = objects[i][p];
    //       }
    //     }
      
    //     return out;
    //   }

    // flatten = (obj, name, stem) => {
    //     var out = {};
    //     var newStem = (typeof stem !== 'undefined' && stem !== '') ? stem + '_' + name : name;
      
    //     if (typeof obj !== 'object') {
    //       out[newStem] = obj;
    //       return out;
    //     }
      
    //     for (var p in obj) {
    //       var prop = this.flatten(obj[p], p, newStem);
    //       out = this.merge([out, prop]);
    //     }
      
    //     return out;
    //   };
    // ------------------------------------------------------------------------------------------------------
    

    lookupHeaderFormat = (header) => {
        var stringArr = header.split(' ')
        if(stringArr.length === 3 && stringArr[0] === "SUB" ){
            return stringArr.join(' ');
        } return stringArr.slice(-2).join(' ');
    }

    async componentDidMount(){
        const users = ["dispatchers", "customer-supports", "area-managers", "couriers"]

        if(users.includes(this.state.type)){
            this.handleSpecialRetrieve();
        }else{
            this.handleRetrieve();
        }
    }

    async handleRetrieve(){
        var self = this;
        var tempOrigin = self.state.type;
        var lookups = ["countries", "regions", "provinces", "districts", "sub-districts", "barangays"];
        var url = "";

		if(self.state.type === "subdistricts"){
			tempOrigin = "sub-districts";
        } else if(self.state.type === "dc"){
            tempOrigin = "distribution-centers"
        }

        console.log(tempOrigin);
        if(lookups.includes(tempOrigin)){
            url = `http://localhost:3000/v1/lookups/${tempOrigin}/${self.state.id}`
        } 
        else if(tempOrigin === "pricings"){
            url = `http://localhost:3000/v1/lookups/prices/${self.state.id}`
        } else {
            url = `http://localhost:3000/v1/${tempOrigin}/${self.state.id}`
        }
        await fetch(url ,{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            if(lookups.includes(tempOrigin)){
                if(tempOrigin === "sub-districts"){
                    tempOrigin = "sub_district";
                } else if(tempOrigin === "distribution-centers") {
                    tempOrigin = "destination";
                }

                var flatObj = flatten(result[pluralize.singular(tempOrigin)], {delimiter: '_'});
                this.setState({details: flatObj});
                console.log(flatObj)
            }else {
                if(tempOrigin === "pricings") {
                    tempOrigin = "price";
                }
                this.setState({details: result[pluralize.singular(tempOrigin)]});
            }

            
            console.log(result);

            

            setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)
        })
            .catch((err) => {
                console.log(err);
        })
    }

    async handleSpecialRetrieve(){
        var self = this;
        var tempOrigin = self.state.type;
        var tempId = self.state.id;

        await fetch(`http://localhost:3000/v1/${tempOrigin}/${tempId}`,{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {

            if(tempOrigin === "customer-supports"){
                tempOrigin = "customer_support";
            }else if(tempOrigin === "area-managers"){
                tempOrigin = "area_manager";
            }else{
                tempOrigin = pluralize.singular(tempOrigin);
            }
            var user = result[tempOrigin];
            var finalUser = {};

            console.log(user);
            
            finalUser.name = user.User.last_name + ", " + user.User.first_name + " " + user.User.middle_name;

            finalUser.email = user.User.email;
            finalUser.contact_number = user.User.contact_number;


            fetch(`http://localhost:3000/v1/hubs/${user.hub_id}`, {
                method: 'GET'
            }).then(response => {return response.json()})
            .then(result => { 
                finalUser.hub = result.hub.name + " (" + result.hub.code + ")"; 
            });
        
            fetch(`http://localhost:3000/v1/distribution-centers/${user.distribution_center_id}`, {
                method: 'GET'
            }).then(response => {return response.json()})
            .then(result => { finalUser.dc = result.distribution_center.name + " (" + result.distribution_center.code + ")"});
            
            finalUser.created = user.created;
            finalUser.updated = user.updated;
            finalUser.deleted = user.deleted;

            this.setState({details: finalUser});

            setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)

        })
	 	.catch((err) => {
             console.log(err);
             
             setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)
        })
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

    render() {
        const {type} = this.state;
        const detailValues = Object.values(this.state.details);
        const detailHeaders = Object.getOwnPropertyNames(this.state.details);
        const headerName = pluralize.singular(this.state.type)[0].toUpperCase() + pluralize.singular(this.state.type).substring(1);
        const regexId = /^.*[_id]$/;
        const dates = ["created","updated", "deleted"];
        const lookups = ["countries", "regions", "provinces", "districts", "sub-districts", "barangays"];
        return(   
                <div>
                <NavLink to={`/home/${type === "dc"? "distribution-center" : type}`} style={{color: "black"}}>
                    <Button icon labelPosition='left' >
                        
                        <Icon name='angle left' />
                            BACK
                    </Button>
                </NavLink>
            
                <Header as="h2" style={{color: "darkOrange"}} attached="top">{(headerName === "Dc" ? "Distribution Center" : (headerName === "Customer-support" ? "Customer Support" : ((headerName === "Sub-district" ? "Sub-District" : headerName))))  + " Details"} </Header>
                
                <Table celled definition>
                    <Table.Body>
                    { detailValues.map((value, index) =>( 

                        <Fragment>
                        {!regexId.test(detailHeaders[index]) && !dates.includes(detailHeaders[index]) && (
                                <Table.Row>
                                <Table.Cell collapsing>{lookups.includes(type) ? this.lookupHeaderFormat(detailHeaders[index].replace(/_/g, ' ').toUpperCase()) : detailHeaders[index].replace(/_/g, ' ').toUpperCase()}</Table.Cell>
                                <Table.Cell>{value}</Table.Cell>
                            </Table.Row>
                        )}
                        {dates.includes(detailHeaders[index]) && (
                            <Table.Row>
                                <Table.Cell collapsing>{detailHeaders[index].toUpperCase()}</Table.Cell>
                                <Table.Cell>{value === null ? "N/A" : moment(value).format('MMMM DD, YYYY, h:mm:ss A')}</Table.Cell>
                            </Table.Row>
                        )}
                        </Fragment>
                    ))}
                    </Table.Body>
                </Table> 
            </div>
        )
    }
}
export default GenericDetails;