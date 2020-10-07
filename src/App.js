import React, {Component} from 'react';
import './App.css';
import Menu from './Components/PageElements/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import NewUser from './Components/Pages/NewUser';
import NotFound from './Components/Pages/NotFound'

class App extends Component{

  render(){  
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
  
}

export default App;
