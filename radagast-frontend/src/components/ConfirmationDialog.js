import React, { Component } from 'react';
import { Button, Icon, Modal, Divider, Form } from 'semantic-ui-react';
import 'react-notifications/lib/notifications.css';
import TextField from './TextField';
import DataList from './DataList';
import { NotificationManager} from 'react-notifications';

class ConfirmationDialog extends Component {
  constructor(props){
    super(props);
    this.state={
        ...props.states,
        formItemsProps: [],
        modalOpen: false
    }
    this.baseState = this.state;
}
  static getDerivedStateFromProps(props,current_state){
    if (current_state.modalOpen !== props.openModal) {
        return {
            modalOpen: props.openModal,
            formItemsProps: props.formItems
        }
    }
  }

    deactivateItem = async (id, type) => {
        var url = "";
        var lookups = ["countries", "regions", "provinces", "districts", "sub-districts", "barangays"];

        console.log(type)
        
        if(type === "dc"){
            type = "distribution-centers"
        }

        if(lookups.includes(type)){
            url = `http://localhost:3000/v1/lookups/${type}/${id}/deactivate`;
        }else if(type==="pricings"){
          
            url = `http://localhost:3000/v1/lookups/prices/${id}/deactivate`;
            console.log("deact"+url);
        } else {
            url = `http://localhost:3000/v1/${type}/${id}/deactivate`;
        }


        await fetch(url, {
            method: 'post',
            headers: {
                // Change when login is implemented
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzE3MDI0NTUsImV4cCI6MTUzMTcxMjQ1NSwianRpIjoiOGMwOTg3OTItOGIwMi00YmQ4LWEyNmEtNjM4MDE1OWYzZTczIn0.-x-aveJC5ZEDdFnVLGT4dIUF2F5SDfFBkxNdeEsASNI'
            }
        })
        .then((response) => { 
            if(!response.ok) {
                return response.text().then(text => {
                    NotificationManager.error(text, 'Error!', 5000)
                  })
            }else return response.json
        })
        .then((result) => {
            if(result !== undefined){
                if(type === "pricings") {
                    NotificationManager.success("The price " + this.props.successMessage);
                } else {
                    NotificationManager.success(this.props.name + this.props.successMessage);
                }
                this.props.updateView();
            }
        })
        .catch((err) => {
            console.log(err);
            NotificationManager.error('Error!', "", 5000);
        })
    }

    activateItem = async (id, type) => {
        var url = "";
        var lookups = ["countries", "regions", "provinces", "districts", "sub-districts", "barangays"];

        if(type === "dc"){
            type = "distribution-centers"
        }

        if(lookups.includes(type)){
            url = `http://localhost:3000/v1/lookups/${type}/${id}/reactivate`;
        }else if(type==="pricings"){
            url = `http://localhost:3000/v1/lookups/prices/${id}/reactivate`;
            console.log("act"+url);
        } else {
            url = `http://localhost:3000/v1/${type}/${id}/reactivate`;
        }

        await fetch(url, {
            method: 'post',
            headers: {
                // Change when login is implemented
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzE3MDI0NTUsImV4cCI6MTUzMTcxMjQ1NSwianRpIjoiOGMwOTg3OTItOGIwMi00YmQ4LWEyNmEtNjM4MDE1OWYzZTczIn0.-x-aveJC5ZEDdFnVLGT4dIUF2F5SDfFBkxNdeEsASNI'
            }
        })
        .then((response) => {  if(!response.ok) {
            return response.text().then(text => {
                    NotificationManager.error(text, 'Error!', 5000)
                })
            }else return response.json
        })
        .then((result) => {
            if(result !== undefined){
                if(type === "pricings") {       
                    NotificationManager.success("The price " + this.props.successMessage);
                } else {
                    NotificationManager.success(this.props.name + this.props.successMessage);
                }
                this.props.updateView();
            }
        })
        .catch((err) => {
            console.log(err);
            NotificationManager.error('Error!', '', 5000);
        })
        
    }

    deleteItem = async (id, type) => {
        //change this when deployed server is updated
        await fetch(`http://localhost:3000/v1/${type}/${id}`, {
            method: 'delete',
            headers: {
                // Change when login is implemented
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzE3MDI0NTUsImV4cCI6MTUzMTcxMjQ1NSwianRpIjoiOGMwOTg3OTItOGIwMi00YmQ4LWEyNmEtNjM4MDE1OWYzZTczIn0.-x-aveJC5ZEDdFnVLGT4dIUF2F5SDfFBkxNdeEsASNI'
            }
        })
        .then((response) => { if(!response.ok) {
            return response.text().then(text => {
                    NotificationManager.error(text, 'Error!', 5000)
                })
            }else return response.json
        })
        .then((result) => {
            if(result !== undefined){
                console.log(result);
                NotificationManager.success(this.props.successMessage);
                this.props.updateView();
            }
        })
        .catch((err) => {
            console.log(err);
            NotificationManager.error('Error!', '', 5000);
        })
    }

  handleOpen = () => this.setState({ modalOpen: true })

  handleCloseYes = () => {
    this.setState(this.baseState);
    this.props.handleCloseModal(false);
  }

  handleChange = (name, value) => this.setState({ [name]: value })

  isInputInvalid(requiredItem){
    var fieldInput = Object.getOwnPropertyDescriptor(this.state, requiredItem.name).value;

    console.log(fieldInput);
    switch(requiredItem.type){
        case "number":
            if(fieldInput === 0) return true;
            break;

        case "email":
            const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!regex.test(fieldInput) || fieldInput === "" ) return true;
            break;

        case "select":
            if(requiredItem.option_type === "text"){
                if(fieldInput === "") return true;
            }
            else{
                if(fieldInput === 0) return true;
            }
            break;
        default:
            if(fieldInput === "")  return true;
            break;
    }
}

  handleSubmit = async () => {
    const {handleType, dataId, rowType} = this.props
    var keys = Object.getOwnPropertyNames(this.props.states);
    var isValidForm = [];

    const {formItemsProps}=this.state;

    if(handleType === "Activate"){
        this.activateItem(dataId, rowType);
        this.handleCloseYes();
    }else if(handleType === "Delete"){
        console.log(dataId, rowType);
        this.deleteItem(dataId, rowType);
        this.handleCloseYes();
    }else{
        keys.forEach(key=>{
            var indexFound;
    
            var requiredItem = formItemsProps.find((item, index)=>{
                indexFound = index;
                if(item.type !== "select" && item.name === key) {
                    return item
                } else if (item.type === "select" && item.state_name === key) {
                    return item
                }return undefined;
            });
    
            if(requiredItem !== undefined && requiredItem.isRequired && this.isInputInvalid(requiredItem)){
                formItemsProps[indexFound].hasError = true;
            }else{
                formItemsProps[indexFound].hasError = false;
            }
    
            isValidForm.push(formItemsProps[indexFound].hasError);
        });
    
        this.forceUpdate();
    
        if(isValidForm.every(input => !input)){
            switch(handleType){
                case "Deactivate":
                    this.deactivateItem(dataId, rowType)
                    break;
                default:
                    break;
            }
            this.handleCloseYes();  
        }
    }
}

  handleCloseNo = () => this.setState({ modalOpen: false })

  render() {
    const {modalOpen} = this.state;
    const { handleCloseModal, headerTitle, modalContent, handlePopupClose, handleType, formItems} = this.props;
    return (
      <div >
         <Modal
            open={modalOpen}
            onClose={handlePopupClose}
            onUnmount={handlePopupClose}
            size='mini'
            >

            <Modal.Header>
              {headerTitle}
            </Modal.Header>

            <Modal.Content >
              <p>
                {modalContent}
              </p>
              {handleType === "Deactivate" && (  
                <Form>         
                   { formItems.map((item)=>(
                        <div>
                        {
                            item.type === "select" && (
                                <DataList name={item.name} label={item.label} values={item.list} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError}/>
                            )
                        }
                        {
                            item.type !== "select" && (
                                <TextField name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError}/>
                            )
                        }
                        <Divider horizontal fitted/>
                        </div>
                    ))}
                </Form>
              )}
              {(handleType === "Reassign Courier" || handleType === "Reassign Vehicle" ||handleType === "Reassign Zone" ) && (  
                <Form>         
                   { formItems.map((item)=>(
                        <div>
                        {
                            item.type === "select" && (
                                <DataList name={item.name} label={item.label} values={item.list} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError}/>
                            )
                        }
                        {
                            item.type !== "select" && (
                                <TextField name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} className={item.className} changeHandler={this.handleChange} isRequired={item.isRequired} hasError={item.hasError}/>
                            )
                        }
                        <Divider horizontal fitted/>
                        </div>
                    ))}
                </Form>
              )}
       
            </Modal.Content>
            

            <Modal.Actions>
              <Button color='red'
              onClick={()=>{
                handleCloseModal(false)}}>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' 
              onClick={()=>{
                  this.handleSubmit();
                }}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>

        </Modal>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}


export default ConfirmationDialog;
