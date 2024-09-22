
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <><Router>
    <Navbar/>
    <Switch>
      <Route exact path="/"><News key="general" pageSize={6} category="general"  / ></Route>
      <Route exact path="/businessx"><News key="business" pageSize={6} category="business" / ></Route>
      <Route exact path="/science"><News key="science" pageSize={6} category="science" / ></Route>
      <Route exact path="/sports"><News key="sports" pageSize={6} category="sports" / ></Route>
      <Route exact path="/entertainment"><News key="entertainment" pageSize={6} category="entertainment" / ></Route>
      <Route exact path="/health"><News key="health" pageSize={6} category="health" / ></Route>
      <Route exact path="/technology"><News key="technology" pageSize={6} category="technology" / ></Route>
    </Switch>
    
    </Router>
    
    
    </>
  );
}

export default App;
