import React,{ Component} from 'react';  
import './style.css';  

import { MDBCloseIcon } from "mdbreact";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'> 
<MDBCloseIcon onClick={this.props.closePopup}></MDBCloseIcon>
<center>

 <h2 className='fontt'>
   ALMOST THERE!!</h2></center>
<div className='popup\_inner'>  
<h1>{this.props.text}</h1> 

<center>
<img src={Users} alt="joo"></img>
</center>

  
<div className="log">
<center>
<form>
   <label>
     
     Username <br/>
     <div className='textbox'>
    <input type="textbox"  name="username"/></div>
  </label>
    <br/>
    <label>
    
      
    
      Password<br/>
     
      <div className='password'>
    <input type="password" name="password" /> 
     </div> 
    <br/> 
      
    
       </label>
     
      </form>
      </center>
      </div> 
    <div className='button'>
      
<Button gradient="peach" onClick={this.props.closePopup}>close me</Button> 
<div>
  <center>
  
    
  </center>
</div>

</div> 
</div> 

</div>  
);  
}  
}  
export default Popup;
