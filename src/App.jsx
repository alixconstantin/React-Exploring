import { Children, useState } from "react";
import "./App.css";
import Clicker from "./Clicker.jsx";

function App() {
  // State 
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

 // Functions 
  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () =>
  {
    setCount = (count + 1);
  };

  console.log(`hsl(${Math.random() * 360}deg, 100%, 70%)`);
  return (
    <>
      {Children}

      <div>Total count : { count } </div>
      <button onClick={toggleClickerClick}>Hide Clicker Component</button>
      {hasClicker && (
        <>
          <Clicker
            keyName="CountA"
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
            increment={ increment }
          />
          <Clicker
            keyName="CountB"
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
            increment={ increment }
          />
          <Clicker
            keyName="CountC"
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
            increment={ increment }
          />
        </>
      )}
      {/* { hasClicker ? <Clicker /> : null } */}
    </>
  );
}

export default App;

int main(int argc, char argv)
{

  if ( argc == 2 )
  {
    /* Ton programme */
  }
  Write(1, "\n", 1);
}


