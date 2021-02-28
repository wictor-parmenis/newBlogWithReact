import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Logo from 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\blogWictorTec\\blog-app\\src\\assets\\images\\astronaut.png'
import '../header/header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {}

        // Binded functions;

    };

    // Methods here;

    /*
    <div className="imgHeader">
                <img src={Logo}></img>
              </div>
    */
    render(){
        return(
            <header className="appHeader">
              <div className="textHeader blueColor">
                <h3><Link to="/">Wictor Tec</Link></h3>
              </div>
              <div className="menuHeader">
                    <Link to="/services" className="linkHeader">Services</Link>
                    <Link to="/about" className="linkHeader">About</Link>
                    <Link to="/login" className="linkHeader">Login</Link>
                    <Link to="/register" className="loginBtn">Register</Link>
                
              </div>
              
                
            </header>
        )}
}   

export default Header;


/*
<nav className="navbar navbar-expand-lg navbar-light bg-light appHeader">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top ml-2" alt=""/>
            <Link to="/"><a className="navbar-brand blueColor ml-3 titleLogo" href="#">
            Wictor Tec
            </a> </Link>
            <div className="collapse navbar-collapse mgLarge" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-item nav-link active linkHeader" href="#">Services <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active linkHeader" href="#">Channel</a>
                <Link to="/login"><a className="nav-item nav-link active linkHeader" href="#">Login</a></Link>
                <a className="nav-item nav-link active loginBtn ml-2" href="#">Sign Up</a>
              </div>
            </div>
          </nav>
        )

        */