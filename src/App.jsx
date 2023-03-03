import { useState } from "react";

function App() {
  //let Contador = 0;
  const [Counter, setCounter] = useState(0)

  return (
    <div>
      <h3>Contador</h3>
      <hr />
      <h1>{Counter}</h1>
      <button 
      onClick={()=> {
        setCounter(Counter + 1);
        console.log(Counter)
      }}
      type="button" 
      className="btn btn-primary"
      >+1</button>
    </div>
  )
}

export default App