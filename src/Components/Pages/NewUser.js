import React, {Component} from 'react';
import { render } from 'react-dom';
import {Form, InputGroup, Col, Button} from 'react-bootstrap';
import API from '../../lib/API';
import  { Redirect } from 'react-router-dom';
import Menu from '../PageElements/Menu';

export default class NewUser extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            phone : '',
            email: '',
            dateOfBirth: new Date(),
            img: null
        };
    }
    
    handleSubmit (event){
        
        console.log(this.state);
        API.postData(this.state);
        // console.log(event);
        event.preventDefault();
        this.props.history.push('/');

        }
    handleChange(event){
        var target = event.target;
        const value = target.value;
        const id = target.id;
        console.log(target.id);
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
    return (
        <React.Fragment>
            <Menu setRow={this.setRow} setCard= {this.setCard}/>
            <Form noValidate onSubmit={(evt)=>this.handleSubmit(evt)}>
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
                placeholder="First name"
                defaultValue="Otto"
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
                placeholder="Last name"
                defaultValue="Bismarck"
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
                    placeholder="john@doe.nl"
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
                    placeholder="+3161213145" 
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
                    required
                    onChange = {(evt) =>this.handleChange(evt)} />
                <Form.Control.Feedback type="invalid">
                Please provide a valid phonenumber.
                </Form.Control.Feedback>
            </Form.Group>

            </Form.Row>
            <Button type="submit">Submit form</Button>
            </Form>
        </React.Fragment>
        
        );
    }
      
}