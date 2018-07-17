import React, { Component } from 'react';

import TextField from './TextField.js';

class SearchField extends Component {
    state = {
        value: ""
    }

    changeHandler = async (e) => {
        await this.setState({value: e.target});
        console.log(this.state.value);
    }

    render() {
        return(
           <TextField iconName='search' placeholder='Search...' type="text" name="Search" changeHandler={this.changeHandler} label=""/>
        )
    }
}
export default SearchField;