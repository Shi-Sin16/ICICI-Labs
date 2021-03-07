import '../App.css';
import Submit from './Submit';
import React, { useState } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
const HomeScreen = () => {
    const [visible, setVisible] = useState(false);
    // const clickHandler = () => {
    //     setVisible(true);
    // }
return (
    <div id='viewPort'>
        <div id='home' onClick={() => setVisible(true)}>Home</div>
        {visible ? (<Submit/>) : null}
        <div id='insideBox'></div>
            
    </div>
)
}
export default HomeScreen;