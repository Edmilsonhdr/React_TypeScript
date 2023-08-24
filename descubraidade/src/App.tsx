import './App.css'
import { useState, FormEvent, useEffect } from 'react';

interface InfoProps {
  nome: string;
  idade: string | number;
}

function App() {

  const [inputNome, setInputNome] = useState("");
  const [inputAno, setInputAno] = useState('');
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [info, setInfo] = useState<InfoProps>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  function calcular(event: FormEvent) {
    event.preventDefault();

    const ano = (currentYear - Number(inputAno));

    setInfo({
      nome: inputNome,
      idade: ano
    })
  }

  return (
    <div className="container">
      <h1>Descubra sua idade</h1>

      <form className="form" onSubmit={calcular}>
        <label className="label">Digite seu nome?</label>
        <input
          className="input"
          placeholder="Digite seu nome..."
          value={inputNome}
          onChange={(e) => console.log(setInputNome(e.target.value))}
        />

        <label className="label">Digite o ano que nasceu?</label>
        <input
          className="input"
          placeholder="Digite o ano que nasceu ..."
          value={inputAno}
          onChange={(e) => setInputAno(e.target.value)}
        />

        <button type="submit" >
          Descobrir idade
        </button>
      </form>
      {info && Object.keys(info).length > 0 && (
        <section className="result">

          <h2>{info?.nome} você tem: <span> {info?.idade} anos</span> </h2>

        </section>

      )}

    </div>
  )
}

export default App
