import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './dashboard.css'

import LogoutIcon from "../../assets/images/logout.png"

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: localStorage.name
        };

        // Binded functions
        this.logout = this.logout.bind(this);
    }

    // Methods here
    
    async componentDidMount(){
        if (!firebase.getCurrent()){
            this.props.history.replace('/login');
            return null
        }
        firebase.getUserName((info) => {
            localStorage.name = info.val().name;
            this.setState({name: localStorage.name})
        })
    }
    
    

    logout = async () => {
        await firebase.logout()
        localStorage.removeItem("nome");
        this.props.history.push('/');
      }

    render(){
        return(
            <div id="app-dashboard">
                <div id="userinfo" className="card">
                    <h2>Hello {this.state.name}</h2>
                    <button id='new-post'><Link to="/dashboard/new" >New post</Link></button>
                    
                    <br></br>
                    <p>Logged with {firebase.getCurrent()}</p>
                    <button  className="logout-button" onClick={() => this.logout()}>Logout</button>
                    
                </div>
                <hr/>
                <div id="tips">
                    <h2>Guide use</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tincidunt lorem. Donec condimentum quam vel risus dignissim, nec pellentesque arcu tempor. Nunc aliquam varius lectus quis porta.
                    </p>
                    <p>
                        Nunc id nisl eros. Vivamus facilisis est tellus, eu tincidunt dui lobortis in. Pellentesque sit amet fringilla risus. Proin ac nibh posuere, auctor magna vitae, mattis neque. Etiam pretium nisi a tristique semper. Integer iaculis rhoncus scelerisque. Proin mollis elementum erat at gravida.
                    </p>
                    <p>Quisque vel nisi magna. Mauris vel ligula pretium, varius ante sit amet, bibendum nulla. Donec egestas velit eget pulvinar lobortis. Aenean massa sem, vestibulum ut venenatis vel, porttitor vel neque. </p>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);