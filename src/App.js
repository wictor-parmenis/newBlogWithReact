import './styles/global.css'
import 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\blogWictorTec\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600;700&display=swap" rel="stylesheet"/>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
