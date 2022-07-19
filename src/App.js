import './App.css'; 
import "./components/FontAwesomeIcons";
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDescription from './components/ProjectDescription'
import {HashRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <div>
    <Router>
     <Navbar/>
     <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/description/:id" exact component = {ProjectDescription}/>
        <Route path="/contact" exact component = {Contact}/>
      </Switch>
     {/* <About/> */}
     {/* <Projects/> */}
     </Router>
    </div>
  );
}

export default App;
