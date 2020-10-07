import React, {Component} from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion"

export default class User extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            
            <motion.li>
                <b>{this.props.data.firstname}</b>
                
                <img src={this.props.data.img} />

            </motion.li>
        );
    }
}