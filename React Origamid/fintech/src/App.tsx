import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import "./style.css";

function App() {
  return (
    <div>
      <Sidenav></Sidenav>
      <Header></Header>
      <Resumo></Resumo>
    </div>
  );
}

export default App;
