import React, {Component} from 'react';
import { render } from 'react-dom';
import API from '../../lib/API';
import UserCard from '../PageElements/UserCard';
import UserRow from '../PageElements/UserRow';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import {Container, Row, Col}from "react-bootstrap";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
          isLoaded: false,
          data: [],
          isRow:false,
        }
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
      console.log(this.props.data);
      if(this.state.isLoaded){
        if(!this.state.isRow){
          return(
            <AnimateSharedLayout>
              <Container>        
                <Row>
                {this.state.data.map(item => (
                    <UserCard data={item} isRow={this.state.isRow} />
                ))}
                </Row>
              </Container>
          </AnimateSharedLayout>       
          );}
        if(this.state.isRow){
          return(
          <AnimateSharedLayout>
              <Container>
                {this.state.data.map(item => (
                    <UserRow data={item} isRow={this.state.isRow} />
                ))}
              </Container>
          </AnimateSharedLayout>
          );
        }
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

// function Item() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
//       <motion.div className="avatar" layout />
//       <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
//     </motion.li>
//   );
// }

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

const items = [0, 1, 2];