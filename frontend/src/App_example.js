import React, { useState } from "react";

import Header from "./Header_example";

function App() {
  // useState retorna um array com 2 posições, primeira é o valor real, e a segunda é uma função de atualização do valor
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  // return <Header title="Semana OmniStack" />; -> assim usa quando chama o atributo ex. { title }
  // abaixo exemplo de quando utiliza o children, pega tudo dentro da tag <Nome_Componente>
  return (
    <>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default App;
