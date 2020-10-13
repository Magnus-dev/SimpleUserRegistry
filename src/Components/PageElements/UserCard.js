import React, {Component} from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import {Card, Button, Col, Row} from "react-bootstrap";
import EditUserPopUp from '../Pages/EditUserPopUp';
import Image from '../PageElements/Image';

export default class User extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            
            <Card style={{ width: '18rem' }} className="User-Card">
                <Image align="center" src={this.props.data.img} />
                <Card.Body>
                    <Card.Title>{this.props.data.firstname + " "+ this.props.data.lastname}</Card.Title>
                    <Card.Text>
                    {this.props.data.email}
                    <br/>
                    {this.props.data.phone}
                    </Card.Text>
                    <EditUserPopUp data= {this.props.data}/>
                </Card.Body>
                </Card>
        );      
    }
}