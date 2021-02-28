import React, {Component} from 'react'
import './styles/global.css'
import 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\blogWictorTec\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css'


import Home from './components/home'
import PageLogin from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import Dashboard from './components/dashboard/index'
import Register from './components/register'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import firebase from './firebase'



class App extends Component {
  state = {
    firebaseInitialized: false
  };

  componentDidMount(){
    firebase.isInitialized().then((results) => {
      this.setState({firebaseInitialized: true})
    });

  };

  render(){
    return this.state.firebaseInitialized !== false ?(
      <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600;700&display=swap" rel="stylesheet"/>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={PageLogin}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/register" component={Register}/>
            </Switch>
          <Footer/>
        </Router>
      </div>
    ) : (
      <h2>Loading...</h2>
    )
  }
}

export default App;
