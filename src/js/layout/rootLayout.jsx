import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Profile from '../containers/profile';
import EmployeeList from '../containers/employeeList';
import Popup from '../containers/popup';
import Reg from '../containers/reg';
import User from '../containers/user';

class RootLayout extends React.Component {
  render() {
    return (
      <div>
        
        <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/reg" component={Reg} />
          <Route exact={true} path="/user" component={User} />
       
          <Route exact={true} path="/employee" component={EmployeeList} />
        </Switch>
      </div>
      </div>
    );
  }
}

export default RootLayout;
