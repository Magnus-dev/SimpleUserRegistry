import React, {Component} from 'react';
import { render } from 'react-dom';
import UserCard from '../PageElements/UserCard';
import UserRow from '../PageElements/UserRow';
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import {Container, Row, Col}from "react-bootstrap";
import Menu from '../PageElements/Menu';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
          data: this.props.data,
          isRow: true,
        }
    }
    setRow= () =>{
      this.setState({
        isRow:true
      })
      // window.location.reload(false);
      // console.log(this.state.isRow);

  }
  setCard= () =>{
    this.setState({
      isRow:false
    })
    // window.location.reload(false);
    console.log(this.state.isRow);
  }
   
    render(){
      console.log(this.state.isRow);
        return(
          <React.Fragment>
             <Menu setRow={this.setRow} setCard= {this.setCard}/>
            {this.state.isRow===false?(
                <AnimateSharedLayout>
                  <Container>        
                    <Row>
                    {this.state.data.map(item => (
                        <UserCard data={item} isRow={this.state.isRow} />
                    ))}
                    </Row>
                  </Container>
              </AnimateSharedLayout>       
              ):(
              <AnimateSharedLayout>
                  <Container>
                    {this.state.data.map(item => (
                        <UserRow data={item} isRow={this.state.isRow} />
                    ))}
                  </Container>
              </AnimateSharedLayout>
              )
        }
        </React.Fragment>);
      
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