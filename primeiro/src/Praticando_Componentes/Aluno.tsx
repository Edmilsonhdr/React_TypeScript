// interface define o tipo que a propriedade deve receber 
interface AlunoProps {
    nome: string;
    idade: number;
}

// adicionando a interface no palametro da função e ele adiciona o tipo que ele deve receber
export function Aluno({ nome, idade }: AlunoProps) {
    return (
        <div>
            <h1>Aluno: {nome}</h1>
            <h3>Idade: {idade}</h3>
        </div>
    )
}