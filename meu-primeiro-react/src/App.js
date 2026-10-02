import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Empresa from './pages/Empresa'
import Home from './pages/Home'



function App() {


return (

<Router>
    <ul>
        <li><Link to="/">Home</Link></li>
         <li><Link to="/Empresa">Empresa</Link></li>
          <li><Link to="/Contato">Contato</Link></li>
        
    </ul>
    <Switch>
        <Route path="/">
        <Home />
        </Route>
    </Switch>
</Router>
)

}




export default App;
