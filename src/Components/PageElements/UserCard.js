import React, {Component} from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import {Card, Button, Image, Col, Row} from "react-bootstrap";

export default class User extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            
            <Card style={{ width: '18rem' }}>
                <Image align="center" src={this.props.data.img} width ="80%"roundedCircle />
                <Card.Body>
                    <Card.Title>{this.props.data.firstname + " "+ this.props.data.lastname}</Card.Title>
                    <Card.Text>
                    {this.props.data.email}
                    <br/>
                    {this.props.data.phone}
                    </Card.Text>
                    <Button variant="primary">Show</Button>
                </Card.Body>
                </Card>
        );      
    }
}