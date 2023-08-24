
import { Link } from 'react-router-dom'
export function Sobre() {
    return (
        <div>
            <h1>Bem vindo a página sobre!</h1>
            <span>Essa é minha primeira pagina com navegação</span>
            <br />
            <Link to="/">Home</Link><br />
            <Link to="/contato">Contato</Link>

        </div>
    )
}

