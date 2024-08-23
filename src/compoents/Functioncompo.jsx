import React from "react";
import { useState } from "react";

const Functioncompo =()=>{
    const [count, setnewcount]= useState(0)

    function add(){
        setnewcount(count+1)
    }
    const minus=()=>{
        setnewcount(count-1)
    }

  return(
    <div className="container">
      <h3>Counter</h3>
      <p>count: {count} </p>
      <button onClick={add}>Add count</button>
      <button onClick={minus}>Minus count</button>
    </div>
   
  )
}

export default Functioncompo;