import React from 'react'
import { useState } from 'react';

function Form() {

  const [count ,setcount] = useState(false)
  let Count= 0

  function increase(){
    Count= Count+1;
    console.log(Count);
  }

  function dicrease(){
    Count = Count-1;
    console.log(Count);
    
  }

  
    
  return (
    
    <div>
      {
         <h1>{count}</h1>
      }

     {
     
      data?
      
      <h1 >nazmin</h1>
      
      : 
      
      <h1 >buri</h1>
     }
     <button onClick={()=> {increase()}}>increase</button>
     <button onClick={()=> {dicrease()}}>dicrease</button>
    </div>
    
  )
}

export default Form