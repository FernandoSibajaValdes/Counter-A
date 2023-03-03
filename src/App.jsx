import { useState } from "react";

function App() {
  //let Contador = 0;
  const [Counter, setCounter] = useState(0)

  return (
    <div>
      <h3>Contador</h3>
      <hr />
      <h1>{Counter}</h1>
      <hr />
      <button 
      onClick={()=> {
        setCounter(Counter + 1);
        console.log(Counter)
      }}
      type="button" 
      className="btn btn-primary"
      >+1</button>
      <hr />
      <button 
      onClick={()=> {
        setCounter(0);
        console.log(0)
      }}
      type="button" 
      className="btn btn-success"
      >Restablecer</button>
      <hr />
      <button 
      onClick={()=> {
        setCounter(Counter - 1);
        console.log(Counter)
      }}
      type="button" 
      className="btn btn-secondary"
      >-1</button>
    </div>
  )
}

export default App