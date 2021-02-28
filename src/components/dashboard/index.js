import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import './dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Wictor'
        };

        // Binded functions
    }

    // Methods here
    render(){
        return(
            <div id="dashboard">
                <div id="userinfo">
                    <h2>Hello {this.state.name}</h2>
                    <Link to="/dashboard/new">New post</Link>
                </div>
                <hr/>
                <div id="tips">
                    <h2>Guide use</h2>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);