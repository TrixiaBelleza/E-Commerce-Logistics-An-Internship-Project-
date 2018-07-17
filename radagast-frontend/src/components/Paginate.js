

import React, { Component } from 'react';
import {Pagination, Button, Icon} from 'semantic-ui-react';


class Paginate extends Component{
 
    render() {
     
        return(     
            <div>
              <Pagination
              size='small'
                defaultActivePage={5}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={50}
                pointing
                secondary 
            />
                <Button.Group floated='right' color='gray' size='small' >
                    <Button>10</Button>
                    <Button>20</Button>
                    <Button>30</Button>
                    <Button>40</Button>
                    <Button>50</Button>
                    <Button>100</Button>
                </Button.Group>
            </div>
        )
    }
}
export default Paginate;