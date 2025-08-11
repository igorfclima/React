import React from "react";

function usuario() {
  return {
    nome: "John Doe",
    profissao: "Software Engineer",
  };
}

type User = {
  nome: string;
  profissao: string;
};

const User = () => {
  const [data, setData] = React.useState<null | User>(null);
  const [number, setNumber] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(usuario());
    }, 1000);
  }, []);
  return (
    <div>
      <div>
        <h1>Total: {number}</h1>
        <button onClick={() => setNumber((n) => n + 1)}>Increment</button>
      </div>
      {data != null && (
        <div>
          {data.nome} - {data.profissao}
        </div>
      )}
    </div>
  );
};

export default User;
