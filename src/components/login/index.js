import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        // Binded functions;
        this.login = this.login.bind(this);
    };

    // Methods here;
    componentDidMount(){
        if (firebase.getCurrent()){
            return this.props.history.replace('dashboard')
        }
    }

    login(e){
        e.preventDefault();
        this.enter();
    }

    enter = async() => {
        const {email, password} = this.state;

        try{
            await firebase.login(email, password)
            .catch((error) => {
                if (error.code === 'auth/user-not-found'){
                    window.alert('This user not exist.')
                }else{
                    console.log('Code of error: ' + error.code)
                    return null;
                }
            });
            this.props.history.replace('/dashboard');
        }catch(error){
            console.log(error.message)
        };
        
            

    }

    render(){
        return(
            <div className="appLogin" >
                <form onSubmit={this.login} className="card" id="login">
                    <h1>Login</h1>
                    <br/>
                    <label>Your email address: </label>
                    <input type='email' autoComplete="off" autoFocus value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} placeholder="email"
                    ></input>
                    <br></br>
                    <label>Your password: </label>
                    <input type='password' autoComplete="off" value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})} placeholder="password"
                    ></input>
                    <button type="submit">Login</button><br></br>
                    <Link to="/register">Not have a count ?</Link>
                </form>
                
            </div>
        )
    }
}   

export default withRouter(Login);