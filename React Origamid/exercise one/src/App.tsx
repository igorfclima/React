import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";

type Venda = {
  nome: string;
  preco: number;
  statsus: string;
};

function App() {
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [data, setData] = useState<null | Venda[]>(null);

  useEffect(() => {
    if (inicio !== "" && fim !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`)
        .then((response) => response.json())
        .then((data) => setData(data as Venda[]));
    }
  }, [inicio, fim]);

  return (
    <>
      <div>
        <Input
          label="Início: "
          id="inicio"
          type="date"
          value={inicio}
          setState={setInicio}
        ></Input>
        <Input
          label="Fim: "
          id="fim"
          type="date"
          value={fim}
          setState={setFim}
        ></Input>
      </div>
      <div>{data !== null && data.length}</div>
    </>
  );
}

export default App;
