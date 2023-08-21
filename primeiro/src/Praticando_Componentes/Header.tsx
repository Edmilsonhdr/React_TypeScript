import './header.css';

interface HeaderProps {
    //title: string; // se torna obrigatoria
    title?: string; // se torna opcional
}

//({ title = "Curso React + TypeScript" } adiciona isso caso nao adicione nenhuma propriedade title
export function Header({ title = "Curso React + TypeScript" }: HeaderProps) {
    return (
        <div className='header'>
            <h1 className='title'>{title}</h1>
            <hr />
        </div>
    )
}