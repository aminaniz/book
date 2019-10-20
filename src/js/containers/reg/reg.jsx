import React, {Component } from 'react';
import './style.css';
import User from '../user';


class Reg extends React.Component {  
  goToProfile = () => {
    this.props.history.push('reg/user');
  }  

 
  render(){
      return (
        <center>
        <div className="back">
        <form >
          <div className="divstyle">
        <h1> CREATE ACCOUNT </h1>
        <div>
      <label className="text">
     <span>First Name        </span><nbps/><nbps/><nbps/>
      <input className="textbox" placeholder="Your Name" name="fname" /><br/>
      </label></div>
      <div><br/>
      <label className="text">
        <span>Last Name       {` `} </span>
         <input className="textbox2" placeholder="Your Last Name" name="lname"/>
          </label></div><br/>
          <div className="k-form-field">
              <span>Gender</span>
              <input type="radio" name="gender" id="female" className="k-radio" />
            <label className="k-radio-label" for="female">Female</label>
              <input type="radio" name="gender" id="male" className="k-radio" checked="checked" />
             <label className="k-radio-label" for="male">Male</label> </div><br/>
          <div>
          <label className="k-form-field">
              <span>Email <span className="k-required">*</span></span>
          <input type="email" className="textbox" placeholder="Your Email" 
                  
                  autoFocus/>
                                    </label>

          </div>
          <div><br/>
          <label className="k-form-field">
              <span>Address <span className="k-required">*</span></span>
          <input type="address" className="textarea" placeholder="Your residential address" />
                                    </label>

          </div> <center>
          <div >
  <h2>Credentials</h2><div>
<label className="k-form-field">
         <span >Username</span>
     <input className="textbox" placeholder="Your username" />
       </label></div>
                <div><br/>
            <label className="k-form-field">
            <span>Password</span>
          <input type="password" className="textbox" placeholder="Your password"
         id ="pass" /></label>
                                       < br/><br/>
                                    <label className="k-form-field">
                                        <span>Confirm Password</span>
                                        <input type="password" className="textbox" id = "newpass" 
                  
                  /></label>
                
                  <div>
                                        <br/>
                                        <div>
                
                                        <li  onClick={this.goToProfile}>SUBMIT </li>                                  
         
            </div>
           
                                      
                                        </div>
                                        
                                        </div>
          </div>
          </center>
    
 </div>
 
 </form>

 </div>
      </center>
    )
  };
}
export default Reg;