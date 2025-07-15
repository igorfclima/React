import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <Alert>
        <Button>Aperte</Button>
      </Alert>
    </div>
  );
}

export default App;
