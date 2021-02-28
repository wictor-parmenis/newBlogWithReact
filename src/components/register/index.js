import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './register.css'


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        };
        
        // Binded functions;
       
        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
        
    };

    // Methods here;
    register(e){
        e.preventDefault();
        this.onRegister();
    }

onRegister = async() => {
    try{
        const {name, email, password} = this.state;
        await firebase.register(name, email, password)
        this.props.history.replace('/dashboard')
    }catch(e){
        console.log(e.message)
    }
}

    render(){
        return(
            <div className="appRegister" >
                    
                <br></br>
                <form className="card" id="register" onSubmit={this.register}>
                <h1 >Register new user</h1>
                <br/>
                    <label>Your name: </label>
                    <input type='text' autoFocus value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})} placeholder="Your name"
                    ></input>
                    <br></br>
                    <label>Your email address: </label>
                    <input type='email' autoComplete="off" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} placeholder="email"
                    ></input>
                    <br></br>
                    <label>Your password: </label>
                    <input type='password' autoComplete="off" value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})} placeholder="password"
                    ></input>
                    <button type="submit">Register</button><br></br>
                    <Link to="/login">You already have a count?</Link>
                </form>
                
            </div>
        )
    }
}   

export default withRouter(Register);