import React, {Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import './new.css'
import firebase from '../../firebase'

class New extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            writer: ''
        };
        // Binded functions;
        this.cadaster = this.cadaster.bind(this);
    }

    // Methods here;
    componentDidMount(){
        if (!firebase.getCurrent()){
            this.props.history.replace('/');
            return null;
        }
    }

    cadaster = async (e) => {
        console.log('done')
        e.preventDefault();

        if (this.state.title !== '' &&
        this.state.description !== '' &&
        this.state.image !== ''){
            let posts = firebase.firebaseApp.ref('posts');
            let db_key = posts.push().key;
            await posts.child(db_key).set({
                title: this.state.title,
                image: this.state.image,
                description: this.state.description,
                writer: localStorage.name
            });

            this.props.history.push('/dashboard')
        }else{
            this.setState({
                alert: 'Fill in all fields...'
            })
        }
    }
    /*
    New Feature of add image with firestore in branch firestore;
    */

    render(){
        return(
            <div id='new-posts'>

                <header id="new">
                    <Link to="/dashboard">Painel</Link>
                </header>

                <form className="card" id="public" onSubmit={this.cadaster} >
                    <h2>New Tip Here</h2>
                    <label>Title: </label><br/>
                    <input placeholder="title of yout tip" autoFocus type="text" value={this.state.title}
                    onChange={(e) => {this.setState({ title: e.target.value})}} /><br/>
                    <label>Url of image: </label><br/>
                    <input placeholder="url of image" type="text" value={this.state.image}
                    onChange={(e) => {this.setState({ image: e.target.value})}} /><br/>
                    <label>Description: </label><br/>
                    <textarea placeholder="Your tip for comunity..." type="text" value={this.state.description}
                    onChange={(e) => {this.setState({ description: e.target.value})}}></textarea>
                    <br/>

                    <span className="alert-danger">{this.state.alert}</span>

                    <button type="submit">Published</button>

                </form>
            </div>
        )
    }
}

export default withRouter(New);