import React,{ Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import './style2.css';
import './style.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Popup from '../popup';
import Reg from'../reg';
import Footer from '../footer'
import Search from '../search'
import User from '../user'



class Home extends Component {
    constructor(props){  
        super(props);  
        this.state = {  isOpenModel: false };  
        }  

       
        openModel =() => {
          this.setState({ isOpenModel: true });
        }
        
          togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  

         goToProfile = () => {
          this.props.history.push('/reg');
        }  

    render()
         {  
    return (
        <div className="Back">
          
        
              <button className="b2" onClick={this.openModel}>LOGIN</button>
             
              {this.state.isOpenModel && 
         <Popup />
}
       <header >
           <p className="Appheader">BOOKXAP</p>
        
           <Search />
          
               
           <Button className="b1" onClick={this.goToProfile}>REGISTER</Button> 

             
                                     
           
          
  
  
         
           
               
           <p position ="center" className="tag">THE WORLDS LARGEST BOOK EXCHANGE WEBSITE</p>
        
            
        </header>
       
       </div>
    );
            }
};

const styles = {
	block: {
        display: 'flex',
	 color: '#fcfcfc',
  fontFamily:'Lato, sans-seri',
  fontSize: 15,
  font: 'smaller',
  width: '90%',
  height: '50%',
  alignItems: 'left',
  justifyContent: 'left',
  position: 'static',
  top:'50%',
  
    },
    title: {
        display: 'flex',
	 color: '#fcfcfc',
  fontFamily:'Lato, sans-seri',
  fontSize: 40,
  font: 'smaller',
  width: '100%',
  height: '50%',
  alignItems: 'left',
  justifyContent: 'left',
  position: 'static',
  top:'300px',
    }
};




 export default Home