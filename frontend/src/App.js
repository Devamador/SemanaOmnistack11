import React, {useState} from 'react';
import Header from './Header';
import Routes from './routes';
import './global.css';

function App() {

  /*const [counter,setCounter] = useState(0);//useState retorna um array [valor, função para trocar o valor]

  function increment(){
    setCounter(counter + 1);
  }*/
  return (
    /*{

    
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    }*/

    <Routes/>
  );
}

export default App;
