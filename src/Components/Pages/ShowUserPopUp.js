import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Button, Form, Col, Container, Row} from 'react-bootstrap';
import API from '../../lib/API';
import Image from '../PageElements/Image';


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
            <Popup trigger={<Button variant="success" >Show</Button>}
                modal
                nested>
                {close => 
                (
                <Container>
                <Row>
                <Col xs={4} md={4}>
                    <Image src={this.state.img}/>
                </Col>
                <Col  className="ml-auto">  
                <Button className="close" variant="danger" onClick={close}>
                &times;
                </Button> 
                <br/> 
                    <Row> 
                        <Col>
                             <b>First Name:  </b>
                        </Col>
                        <Col>
                            {this.state.firstname}
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <b>Last Name:   </b>
                        </Col>
                        <Col>
                            {this.state.lastname}
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <b>Email:   </b><br/>
                        </Col>
                        <Col>
                            {this.state.email}
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <b>Phone:   </b><br/>
                        </Col>
                        <Col>
                            {this.state.phone}
                        </Col>
                    </Row>

                    </Col>
            </Row>
            </Container>  
                )}
            </Popup>
                
        );      
    }
}