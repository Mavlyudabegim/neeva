import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact component={Home}/>
    {/* <Route path='/Features' exact component={Features} />
    <Route path='/FAQ' exact component={FAQ} /> */}
    

    

    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
