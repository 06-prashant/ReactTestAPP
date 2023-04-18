import React from 'react';
import { useState } from 'react';
export default function Tubject1() {

  const [count, setCount]=useState(0);

  const addCounter=()=>{
    setCount(count+1);
  }
  const subCounter=()=>{
    setCount(count-1);
  }

  const handleOnChange=(event)=>{
     setCount(event.target.value);
  }

  return (
    <div className="comp1">
      <button onClick={addCounter} onChange={handleOnChange} className="incB" data-testid="incr">Increment Number</button>
      <b id="number" data-testid="countBar">  {count} </b>
      <button onClick={subCounter} onChange={handleOnChange} className="decB" data-testid="decr">Decrement Number</button>
      <p data-testid="para1">Hello</p>
      </div>
  )
}


