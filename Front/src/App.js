import Login from './pages/login'
import Home from './pages/home'
import {Route} from "wouter";
import {useState} from 'react'
function App() {
  const [login,setLogin]=useState(false);
  const handleLogin=()=>{setLogin(true)};
  return (
    <div>
      <section>
      <Route 
        path="/tih/login"><Login handleLogin={handleLogin}/>
      </Route>
      {
        login
        ?(
        <Route
          path="/tih/home"
          component={Home}
        />)
        :(
        <h1>No logeado</h1>)
      }
      </section>
    </div>
  );
}

export default App;
