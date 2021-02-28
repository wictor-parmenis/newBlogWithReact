import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './error.css'


class Error extends Component{
    constructor(props){
        super(props);
        this.state = {}

        // Binded functions;

    };

    // Methods here;


    render(){
        return(
            <div className="appAbout">
                <section className="card" id="about">
                    <h2>Ops... Something went wrong.</h2>
                    <h6>We apologize for the inconvenience, please try again later  :(</h6>
                    
                </section>
            </div>
        )}
}   

export default Error;

