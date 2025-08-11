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
  React.useEffect(() => {
    setTimeout(() => {
      setData(usuario());
    }, 1000);
  }, []);
  return (
    <div>
      {data != null && (
        <div>
          {data.nome} - {data.profissao}
        </div>
      )}
    </div>
  );
};

export default User;
