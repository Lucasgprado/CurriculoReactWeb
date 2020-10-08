import React from "react";
import "./Estilo.css";
import DP from "./DadosPessoais";
import EXP from "./Exp";
import Escolaridade from "./Escolaridade";
import Habilidades from "./Habilidades";

function App() {
  return (
    <div>
      <DP />
      <EXP />
      <Escolaridade />
      <Habilidades />
    </div>
  );
}

export default App;
