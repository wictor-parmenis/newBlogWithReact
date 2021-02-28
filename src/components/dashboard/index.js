import React, {Component} from 'react';
import './dashboard.css'
import {Link, withRouter} from 'react-router-dom'

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
            <div>
                <h2>Hello {this.state.name}</h2>
                
            </div>
        )
    }
}

export default withRouter(Dashboard);