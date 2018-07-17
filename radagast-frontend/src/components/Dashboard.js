import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';

class Dashboard extends Component{

    componentDidMount(){
        this.props.handleHeaderChange("DASHBOARD","shipping");
        setTimeout(()=>{
            this.props.shouldToggleLoading(false);
        },1500)
    }

    componentWillUnmount(){
        this.props.shouldToggleLoading(true);
    }

    render(){
        return(
            <div>
                <Container>

                </Container>
            </div>
        )
    }
}

export default Dashboard;