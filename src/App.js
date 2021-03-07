// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';
import Submit from './components/Submit';

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Submit />
    </div>
  );
}

export default App;
