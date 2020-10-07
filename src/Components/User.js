import React, {Component} from 'react';

export default class User extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <b>{this.props.data.firstname}</b>
                
                <img src={this.props.data.img} />

            </div>
        );
    }
}