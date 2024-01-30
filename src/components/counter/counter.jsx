import React, { useEffect, useState } from 'react'
import '../counter/counter.css';
function Counter() {
    const [count,setCount]=useState(0);

function Increment(){
    setCount(count+1);
}
function Decrement(){
    setCount(count>0 && count-1);
}
 function reset(){
    setCount(0);
 }
useEffect(()=>{
localStorage.setItem('count',JSON.stringify(count));
console.log('kashif welcome to')
},[count])


  return (
     <>
     <div className="container">
    <button className="btn" onClick={Increment}>
      Increment
    </button>
    <div className="count">{count}</div>
    <button className="btn" onClick={Decrement}>
      Decrement
    </button> 
     <button className='btn' onClick={reset}>Reset</button>
  </div>
  
     
     </>
  
  )
}

export default Counter;