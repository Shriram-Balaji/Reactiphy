import React, {Component} from 'react';
import './styles.css'
import logo from './images/logo.svg'
class Header extends Component {
  render() {
    let APP_NAME = '';
    if(this.props.app_name){
      APP_NAME=this.props.app_name;
    }
    //js goes here
    return(
      //html goes here
      <header className="Header">
       <img className="Header-logo" src={logo} alt={logo}/>
       <h3>{APP_NAME}</h3>
      </header>

    );
  }

}

export default Header;
