import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';
import Submit from './components/Submit';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Link to="/">Home</Link>
      <Link to="/submit">Submit</Link> */}
      <Switch>
        <Route path='/submit'>
          <Submit />
        </Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
