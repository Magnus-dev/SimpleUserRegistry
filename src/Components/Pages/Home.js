import React, {Component} from 'react';
import { render } from 'react-dom';
import API from '../../lib/API';
import User from '../User';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
          isLoaded: false,
          data: []
        }
    }
    componentDidMount(){

        API.fetchData('https://api.dev-master.ninja/reactjs/smoelenboek/get')
        .then( data=>{
          console.log(data);
          this.setState({data:data, isLoaded:true})
        })
        .catch(error=>{
          console.log(error)
        })
      }
    render(){
        console.log(this.props.data)
        if(this.state.isLoaded){
            return(
                <div>
                    {this.state.data.map( (item)=>{
                      return(
                        <User data ={item}/>);
                    })}
                </div>
                
            );}
        else{
            return(
                  <div>
                    <h1>
                      Loading....
                    </h1>
                  </div>
                );
          }
    }
}