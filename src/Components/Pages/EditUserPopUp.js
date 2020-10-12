import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Button, Form, Col} from 'react-bootstrap';
import API from '../../lib/API';


export default class EditUserPopUp extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname: props.data.firstname,
            lastname: props.data.lastname,
            phone : props.data.phone,
            email: props.data.email,
            dateOfBirth: props.data.dateOfBirth,
            id: props.data.id,
            img: props.data.img
        };
    }
    
    handleSubmit (event){
        
        console.log(this.state);
        API.putData(this.state);
        // console.log(event);
        event.preventDefault();
        window.location.reload(false);

        }
    handleChange(event){
        var target = event.target;
        const value = target.value;
        const id = target.id;
        console.log(value);
        this.setState({
            [id]: value
        })
    }
    fileSelectedHandler = (event) => {
        let file = event.target.files[0];
        if(file){
            const reader= new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }
        
    }
    _handleReaderLoaded = (readerEvt)=>{
        let binaryString = readerEvt.target.result;
        this.setState({ img: "data:image/jpeg;base64,"+ btoa(binaryString)});
        console.log(this.state.img)
    }
    render(){
        // console.log(this.props.data);
        return(
            <Popup trigger={<Button variant="primary" >Show</Button>}
                modal
                nested>
                {close => 
                (<Form noValidate onSubmit={(evt)=>this.handleSubmit(evt)}>
                <Button className="close" variant="danger" onClick={close}>
                &times;
                </Button>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="img">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                        required
                        type="file"
                        accept = ".jpeg, .png, .jpg"
                        onChange = {(evt) =>this.fileSelectedHandler(evt)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="firstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder={this.props.data.firstname}
                        defaultValue={this.props.data.firstname}
                        onChange = {(evt) =>this.handleChange(evt)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="lastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder={this.props.data.lastname}
                        defaultValue={this.props.data.lastname}
                        onChange = {(evt) =>this.handleChange(evt)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder={this.props.data.email}
                            defaultValue={this.props.data.email}
                            required
                            onChange = {(evt) =>this.handleChange(evt)} />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder={this.props.data.phone}
                            defaultValue={this.props.data.phone}
                            required
                            onChange = {(evt) =>this.handleChange(evt)} />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid phonenumber.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="dateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder = {this.props.data.dateOfBirth}
                            defaultValue={this.props.data.dateOfBirth}
                            required
                            onChange = {(evt) =>this.handleChange(evt)} />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid phonenumber.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    </Form.Row>
                    <Button type="submit">Submit form</Button>
                </Form>
                )}
            </Popup>
                
        );      
    }
}