import React, {Component} from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import {Card, Button, Col, Row} from "react-bootstrap";
import Image from './Image';
import EditUserPopUp from '../Pages/EditUserPopUp';
import ShowUserPopUp from '../Pages/ShowUserPopUp';

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

                        <h2>{this.props.data.firstname + " "+ this.props.data.lastname}</h2>
                        <h3> {this.props.data.email}</h3>
                        <h3> {this.props.data.phone}</h3>
                        
                        <br/>
                        <ShowUserPopUp data= {this.props.data}/>
                        <span>   </span>
                        <EditUserPopUp data= {this.props.data}/>
                    </Col>
            </Row>
        );
      
    }
}