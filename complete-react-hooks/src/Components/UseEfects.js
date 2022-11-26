import React, { useState, useEffect } from "react";
import "./counter.css";

function Counter (){

  const [count , setCount] = useState(0);


  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return setCount(count - 1);
  };


  useEffect(()=>{
    document.title = count;
  })


    return (
      // <div className="main">
      //  <button onClick={() => setCount(count + 1)}>+</button>
      
      //   <h1>{count}</h1>
      //     <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}> - </button>
      // </div>

      <div className="container">
      <button onClick={() => countUpdate("inc")}>
       +
      </button>
      <h1>{count}</h1>
      <button onClick={() => countUpdate("dec")}>
        -
      </button>
    </div>
    );

}

export default Counter;
