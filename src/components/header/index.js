import React, {Component} from 'react'
import Logo from 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\blogWictorTec\\blog-app\\src\\assets\\images\\astronaut.png'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {}

        // Binded functions;

    };

    // Methods here;

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light appHeader">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top ml-2" alt=""/>
            <a className="navbar-brand blueColor ml-3 titleLogo" href="#">
            Wictor Tec
            </a>
            <div className="collapse navbar-collapse mgLarge" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-item nav-link active linkHeader" href="#">Services <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active linkHeader" href="#">Channel</a>
                <a className="nav-item nav-link active linkHeader" href="#">Login</a>
                <a className="nav-item nav-link active loginBtn ml-2" href="#">Sign Up</a>
              </div>
            </div>
          </nav>
        )
    }
}   

export default Header;