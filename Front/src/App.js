import Login from './pages/login'
import Home from './pages/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import { PrivateRoute } from './components/PrivateRote';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
              <PrivateRoute exact path ='/home' component={Home}/>
              <Route exact path="/" component={Login}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
