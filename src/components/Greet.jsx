import React from "react";
import '../index.css'


const currTime = new Date().getHours();

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

// for greeting
const h1Style={
    fontFamily: "'Josefin Sans', sans-serif"
  }
  const spanStyle={
   color:'red'
  }
  
function Greet(){
return (

        <div className="mainStyle">
                <h1  style={h1Style}>
                        Hello Sir,
                        <span style={spanStyle}>
                        {greet}
                        </span>
                </h1>
            
        </div>
);
}
export default Greet;