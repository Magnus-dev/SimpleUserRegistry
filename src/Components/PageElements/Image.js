import React, {Component} from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { Image} from "react-bootstrap";


export default class image extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){

        return(
            
            <Image align="center" src={this.props.src} className="App-thumbnails" roundedCircle background-size="contain" />
        );
      
    }
}