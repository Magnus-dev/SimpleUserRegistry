import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import API from './lib/API';
import Menu from './Components/PageElements/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import NewUser from './Components/Pages/NewUser';
import NotFound from './Components/Pages/NotFound'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      isLoaded: false,
      data: []
    }
  }
  componentDidMount(){
      var data = { 
        field: "Deze info sturen!"
      }
      API.fetchData('https://api.dev-master.ninja/reactjs/smoelenboek/get', data)
      .then( response=>{
        console.log(response);
        this.setState({data:data, isLoaded:true})
      })
      .catch(error=>{
        console.log(error)
      })
    }
  render(){
    if(this.state.isLoaded){
      return (
        <React.Fragment>
          <BrowserRouter>
            <Route component={Menu}/>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/add" component={NewUser} exact/>
              <Route component={NotFound}/>
            </Switch>
          </BrowserRouter>
        </React.Fragment>
        
      );
    }
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

export default App;
