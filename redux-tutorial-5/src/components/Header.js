import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
          </div>            
        );
    }
}

export default Header;