import { useEffect, useState } from "react";
import React from "react";
import Header from "./components/Header";
import Paths from "./routes/Paths";

const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function boasVindas() {
    alert('Boas Vindas')
  }

  useEffect(() => {
    console.log('useEffect foi chamado')
  });

  useEffect(() => {
    console.log('useEffect que é chamado somente uma vez')
    boasVindas()
  }, []);

  useEffect(() => {
    console.log(`useEffect ativado somente por dependências`)
  }, [count])

  return ( 
    <>
    <Paths />
    <h1>Olá, Mundo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum voluptates ut pariatur, perspiciatis ipsum nostrum illo consectetur totam neque fugit rem incidunt illum distinctio repellendus. Debitis minus similique praesentium!</p>
    <h2>Contador: {count}</h2>
    <button onClick={() => setCount(count + 1)}></button>

    <h2>Contador 2: {count2}</h2>
    <button onClick={() => setCount2(count + 1)}></button>
    </>
   );
};
 
export default App;