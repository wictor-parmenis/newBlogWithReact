import React, {Component} from 'react'
import firebase from '../../firebase'
import './home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
            
        // Binded functions;

    };

    componentDidMount(){
        // method of firebase for search posts;
        firebase.firebaseApp.ref('posts').once('value', (snapshot) => {
            let state = this.state;
            state.post = [];

            snapshot.forEach((children) =>{
                state.post.push({
                    key: children.key,
                    title: children.val().title,
                    image: children.val().image,
                    description: children.val().description,
                    writer: children.val().writer
                })
            });
            this.setState(state);
        })
    }

    // Methods here;

    render(){
        return(
            <section className="homePage">
                {this.state.post.map((post) => {
                    return(
                    <article key={post.key} className="card">
                        <header>
                            <div>
                                <h2>{post.title}</h2>
                                <span> {post.writer} </span>
                            </div>
                            <img src={post.image} alt="post image"/>
                            <p className="description">{post.description}</p>
                        </header>
                        
                    </article>
                    
                    
                         
                    )
                    
                })}
            </section>
        )
    }
}

export default Home;

/*  

             <section>
                {this.state.post.map((post) => {
                    return(
                    <section>
                        <header>
                            <div>
                                <h2>{post.title}</h2>
                                <span> {post.writer} </span>
                            </div>
                            <img src={post.image}  />
                            <footer>
                                <p>{post.description}</p>
                            </footer>
                        </header>
                    </section>
                    )
                    
                })}
            </section>

*/