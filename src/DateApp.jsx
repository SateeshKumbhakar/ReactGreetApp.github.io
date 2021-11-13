import React from "react";
class DateApp extends React.Component{

    constructor(props){
      super(props);
      this.state={date: new Date()}
    }

    componentDidMount(){
        this.TimeID=setInterval(()=>this.Tick(),1000 );
    }

    componentWillUnmount(){
        clearInterval(this.TimeID);
    }
    // Function
    Tick(){

        this.setState({date:new Date()});
    }
  render(){
    return(
         <>
           <p> Time: {this.state.date.toLocaleTimeString()}</p>
         </>    
         );
}   
}
export default DateApp;