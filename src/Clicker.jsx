import { useEffect, useState } from 'react';


function Clicker({increment, keyName, color})
{
   const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0));
  console.log(increment);

   useEffect(() =>
   {
     return () =>
     {
       localStorage.removeItem(keyName);
     }
   },[])

   useEffect(() =>
   {
    localStorage.setItem(keyName, count);
   },[count])

   const buttonClick = () =>
   {
        setCount( count + 1 );
   }
  
    return <div>
        <button onClick={ buttonClick }>Click me</button>
        <div style={ {color}}>Clicks count : {count}</div>
    </div> 
    ;
}

export default Clicker

/**
 * 


jsx
Copy code
import React, { useState } from 'react'; // Assurez-vous d'importer useState correctement

function Clicker() {
  const [count, setCount] = useState(0); // Utilisez useState pour gérer l'état local

  const buttonClick = () => {
    setCount(count + 1); // Utilisez setCount pour mettre à jour l'état
  }

  return (
    <div>
      <button onClick={buttonClick}>Cliquez sur moi</button>
      <div>Nombre de clics : {count}</div>
    </div>
  );
}

export default Clicker;
 */