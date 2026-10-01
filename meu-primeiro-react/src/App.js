
import './App.css';
import OutraLista from './Listas/NovaLista';



function App() {
const meusItens = ['javascript', 'nodejs', 'ReacCT', 'htmllll' ]

return (
<div>
<h1>lista</h1>
<OutraLista itens={meusItens} />


</div>

)

}




export default App;
