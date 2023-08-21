import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {

  // input valor inicial;
  // setInput novo valor
  const [input, setInput] = useState("");//inicia como vazio;
  // const [aluno, setAluno] = useState<string | number>("");//inicia como vazio;<string | number> pode receber string ou number
  const [idade, setIdade] = useState("");//inicia como vazio;

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador, setContador] = useState(0);

  function mostrarAluno() {

    setInfoAluno({
      nome: input,
      idade: idade,
    });

  }


  function adicionar() { setContador(valorAtual => valorAtual + 1) }

  function diminuir() {
    if (contador === 0) {
      return;
    }
    setContador(valorAtual => valorAtual - 1)
  }

  return (
    <div>
      <h1>Conhecendo useState</h1>

      <input
        placeholder="Digite o nome"
        value={input}//recebe o valor vazio
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        placeholder="Digite sua idade"
        value={idade}//recebe o valor vazio
        onChange={(e) => setIdade(e.target.value)}
      />

      <br />

      <button onClick={mostrarAluno}> Mostrar Aluno</button>

      <h3>Nome do aluno:{infoAluno?.nome}</h3>
      <h3>Idade do aluno:{infoAluno?.idade}</h3>

      <hr />
      <br />
      <h1>Contados com useState</h1>
      <button onClick={adicionar}> + </button> {contador} <button onClick={diminuir}> - </button>
    </div>
  )
}
