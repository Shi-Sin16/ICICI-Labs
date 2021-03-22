import React,{Component,useState,useEffect} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Home=()=>{
const [breed,setBreed]=useState('');
const [userInfo,setUserInfo]=useState([]);
useEffect(()=>{
fetch('https://dog.ceo/api/breeds/list/all')
.then((res)=>{
    res.json();
})
.then((res)=>{
  console.log(res);
  setUserInfo(state=>[...state,...res]);
  console.log(userInfo )
})
},[])
    return(
        <>
            <div className="container ">
            <div className="row bg-primary p-2">
            <div className="col" style={{fontWeight: 'bold'}}>Dog Gallery</div>
            <button style={{backgroundColor: 'green', color: 'white'}}>Custom Search</button>
            </div>
            </div>

            <input placeholder="Type here to filter by breed" onChange={(event)=>{setBreed(event.target.value)}} style={{margin:"10px"}}  />

            {
          userInfo.filter(temp => temp.name.includes(message).map((output)=>{
              return(
                  <>
                <div className="container" style={{boxShadow :"10px 10px 8px #999999"}}>
                    <div className="row bg-light" >
                    <div className="col">{output.message}</div>
                    </div>
                </div>
                  </>
              )
          })
      }
        </>
              )
}

export default Home;