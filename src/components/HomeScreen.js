import '../App.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
const HomeScreen = () => {
return (
    <div id='viewPort'>
        <div id='home'>Home</div>
        <div id='insideBox'></div>
        {/* <Router> */}
            {/* <Link to='/'><div id='home'>Home</div></Link>
            <Switch>
                <Route path='/'>
                    <HomeScreen />
                </Route>
            </Switch>
        </Router> */}
    </div>
)
}
export default HomeScreen;