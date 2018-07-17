import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import GenericAddButton from './GenericAddButton';
import Activation from './Activation';

import {bookingStates, bookingFormItems} from '../constants/constants.js';

class OrderManagement extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            bookings:[]
        }
        this.getBookings = this.getBookings.bind(this);
    }
    
    componentDidMount(){
        this.props.handleHeaderChange("ORDER MANAGEMENT","clipboard list");
        this.getBookings();
    }

    async getBookings() {
		await fetch('http://localhost:3000/v1/bookings',{
            method: 'GET'
        })
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result.bookings);
            
            this.setState({bookings: result.bookings});

            setTimeout(()=>{
                this.props.shouldToggleLoading(false);
            },1500)
        })
	 	.catch((err) => {
	 		console.log(err);
        })
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

    render(){
        return(
            <div>
                <Container>
                    <GenericAddButton action={this.handleAddButton} states={bookingStates} form={bookingFormItems} header_name="Booking" url="http://localhost:3000/v1/bookings" updateView={this.getBookings} successMessage="Successfully added booking!" type="bookings"/>

                    <Activation states={bookingStates} form={bookingFormItems} contentActItems={this.state.bookings} type="bookings" active={true} button1= "View Cancelled Bookings" button2="View Active Bookings" updateView={this.getBookings} successMessage="Successfully updated booking!" url="http://localhost:3000/v1/bookings"/>
                </Container>
            </div>
        )
    }

}
export default OrderManagement;
