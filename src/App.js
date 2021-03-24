import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from './components/Form';
import Users from './components/Users'
import './App.css';

function App() {
  return (
    <Router>
      <div id="app">
        <Switch>
          <Route exact path="/" component={Form}>
          </Route>
          <Route path="/home/users" component={Users}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
