import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './about.css'
class About extends Component{
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
                    <h2>About</h2>
                    <h6>Wictor Parmenis</h6>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lorem a neque cursus interdum. Morbi tincidunt at elit id efficitur. Sed vel neque felis. Nam arcu mi, molestie a sollicitudin vitae, rutrum sit amet mauris. Donec consectetur condimentum dapibus. Nam lacinia aliquet neque sed finibus. Donec diam dolor, consectetur at interdum nec, ullamcorper ac enim. Aenean sit amet viverra leo, ut malesuada tortor.</p>
                    <p>Channel in youtube: <a href="https://www.youtube.com/channel/UCEJMovNV59ikQsxx_Y-vbew">Wictor Tec</a></p>
                </section>
            </div>
        )}
}   

export default About;

