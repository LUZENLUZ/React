import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <Router>
            <h1>TESTE</h1>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/empresa">Empresa</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<h2>Estou na Home</h2>} />
                <Route path="/empresa" element={<h2>Estou na Empresa</h2>} />
                <Route path="/contato" element={<h2>Estou no Contato</h2>} />
            </Routes>
        </Router>
    )
}

export default App