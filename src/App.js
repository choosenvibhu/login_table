import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from "./components/Home";
import InvalidPath from "./components/InvalidPath";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route path={"/home"} component={Home} />
          <Route component={InvalidPath} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
