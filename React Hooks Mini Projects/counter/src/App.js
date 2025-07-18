import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={reset}>Réinitialiser</button>

      <h3>Historique :</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>Valeur : {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
