import React, {Component} from 'react';
import './App.css';
import API from './lib/API';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import NewUser from './Components/Pages/NewUser';
import NotFound from './Components/Pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoaded: false,
      data: [],
    };
    
  }
   componentDidMount(){
        API.fetchData('https://api.dev-master.ninja/reactjs/smoelenboek/get')
        .then( data=>{
          // console.log(data);
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
            <Switch>
              <Route path="/" exact   
                     render={ (props) => <Home { ...props }
                                          data={this.state.data}
                     /> }/>
              <Route path="/add" component={NewUser} exact/>
              <Route component={NotFound}/>
            </Switch>
          </BrowserRouter>
        </React.Fragment>
        
      );   
    }else{
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
