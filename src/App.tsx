import React, { useState } from 'react';
import './index.css'

function App() {
  const[fila, SetFila] = useState<string[]>([])
  const[texto, SetTexto] = useState<string>('')
  function enqueue(item:string){
    SetFila([...fila,item])
  }
  function dequeue(){
    SetFila(fila.slice(1))

  }
  function peek():string{
    return fila[0]
  }
  function handleEnqueue(){
    enqueue(texto)

  }
  function handleDequeue(){
    dequeue()

  }
  return (
    <div>
      <input onChange={(e)=>{SetTexto(e.target.value)}} type="text"/>
      <button onClick={handleEnqueue}>Adicionar</button>
      <button onClick={handleDequeue}>Remover</button>
  <p>Proxima:{peek()}</p>
  <ul>
    {
      fila.map((item)=>{
      return <li key={item}>{item}</li>
      })
    }
  </ul>
    </div>
  );
}

export default App;
