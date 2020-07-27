import React, { Component } from 'react'
import '../css/header.css'
class Header extends Component{
    
    render(){
        return(
            <div class="topnav">
                <a class="active" href="#home">Home</a>
            </div>
        )
    }
}

export default Header;