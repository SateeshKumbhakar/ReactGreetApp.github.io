import React from "react";
import ReactDOM from "react-dom";
import './index.css'


// This for greetings
const currTime = new Date().getHours();
const currTim= new Date().toLocaleTimeString();
 let greet= '';
if(currTime>1 && currTime<=12){
greet='Good Morning ';
}
if(currTime>12 && currTime<=19){
greet='Good Evenning ';
}
if(currTime>19 && currTime<=23){
greet='Good Night ';
}

// Code for Style

const h1Style={
  fontFamily: "'Josefin Sans', sans-serif"
}
const spanStyle={
 color:'red'
}

// for rendering 
ReactDOM.render(
  <>
  <h3 className= "main">  Current Time {currTim}</h3>
  <div className="mainStyle">
          <h1  style={h1Style}>
                Hello Sir,
                <span style={spanStyle}>
                {greet}
                </span>
        </h1>
       
  </div>
  <br />
  </>
  ,document.getElementById("root")
);