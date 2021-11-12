import React from "react";
import '../index.css'

 
const currTim= new Date().toLocaleTimeString();
function Head(){
    return <h3 className= "main">  Current Time {currTim}</h3>
}
export default Head;