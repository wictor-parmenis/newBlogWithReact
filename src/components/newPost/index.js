import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom';
import './newPost.css'
import firebase from '../../firebase'

class NewPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            alert: ''
        };

        // Binded functions
        this.public = this.public.bind(this);
    }
    // Methods here

    componentDidMount(){
        if (!firebase.getCurrent()){
            this.props.history.replace('/');
            return null
        }
    };


    public = async(e) => {
        e.preventDefault();
        if(this.state.title !== '' && 
        this.state.description !== '' && 
        this.state.image !== ''){
            console.log('done')
            let newPosts = firebase.firebaseApp.ref('posts');
            let key = newPosts.push().key;
            await newPosts.child(key).set({
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                writer: localStorage.name
            })

            this.props.history.push('/dashboard')
        }else{
            this.setState({
                alert: 'Put all inputs please...'
            })
        }
    }

    render(){
        return(
            <div id='new-post'>
                <header id="new">
                    <button> <Link to="/dashboard">Painel</Link> </button>
                </header>
                <form className="card" onSubmit={this.public} id='new-post-form'>
                    
                <h1 >New post</h1>
                <br/>
                    <label>Title of notice: </label>
                    <input type='text' autoFocus autoComplete="off" value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})} 
                    placeholder="title here"
                    ></input>
                    <br></br>
                    <label>Url of image: </label>
                    <input type='text' autoComplete="off" value={this.state.image}
                    onChange={(e) => this.setState({image: e.target.value})} 
                    placeholder="url of image of post"
                    ></input>
                    <br></br>
                    <label>Your notice: </label>
                    <textarea id='notice' type='text' autoComplete="off" value={this.state.description}
                    onChange={(e) => this.setState({description: e.target.value})} placeholder="Your small notice"
                    />
                    <span className="alert-danger">{this.state.alert}</span>
                    <button type="submit">Public</button><br></br>
                    
                </form>

            </div>
        )
    }
}

export default withRouter(NewPost);