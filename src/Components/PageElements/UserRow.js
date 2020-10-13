import React, {Component} from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import {Card, Button, Col, Row} from "react-bootstrap";
import Image from '../PageElements/Image';

export default class User extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){

        return(
            <Row className= "User-Row">
                    <Col>
                        <Image variant ="left" src={this.props.data.img}  />
                    </Col>
                    <Col>

                        <b>{this.props.data.firstname + " "+ this.props.data.lastname}</b>
                        <br/>
                        {this.props.data.email}
                        <br/>
                        {this.props.data.phone}
                        <br/>
                        <Button variant="primary">Show</Button>
                    </Col>
            </Row>
        );
      
    }
}