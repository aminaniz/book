import React from 'react';
import './style.css';


class Profile extends React.Component {

  goToHome = () => {
    this.props.history.push('/');
  }

   render() {
    const { data } = this.props;
    return (
      <div style={{ marginTop: 20 }}>
        <div style={{ margin: 20 }}>
     
        this is my profile page,abhh
        <div style={{ color: 'red' }} onClick={this.goToHome}>go back to home</div>
        </div>
      </div>
    );
  }
}

export default Profile;
