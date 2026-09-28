
import './App.css';
import HelloWorld from './componentes/HelloWorld'
import Outro from './componentes/Outro'
import Hook1 from './hooks/Hook1'


<HelloWorld />




function App() {
  const names2 = 'joseph';



  
  function som (a, b) {
    return a + b
  }
  som = 1 + 5
  


  return (
     
    
      <div className="App">
      <header className="App-header">
      
     <div>
      <Hook1 />
<h2> ola</h2>
  <Outro />
<p>a conta da {som}</p>
      <p>ola eu sou o {names2}</p>
     </div>
     <HelloWorld />
     <Outro />
      </header>
    </div>
  );  
}

export default App;
