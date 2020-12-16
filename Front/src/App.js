import Login from './pages/login'
import Home from './pages/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/home" component={Home}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
