
import api from "./api/api";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");

  // async: sempre quando eu chamar essa funcao, vai ser retornada uma promise
  // dentro da funcao, as promises vai ser chamas linha a linha
  async function getPost() {
    // await: espera execucao da chamada terminar, para executar a linha abaixo
    
    let reponse = await api.get(`/posts`)
    
    setValue(reponse.data)
  }
  function renderList() {
    if (value === null | value === (``))
      return <p>sem itens na lista</p>
    var result = []
    
    value.forEach((element, index) => {
      result.push(<p key={index}>{element.title}</p>)

    });
    return result
  }

  return (
    <div className="App">
      <h1>'api'</h1>
      <button onClick={getPost}>get</button>
      {/* <p>{value?.title}</p> */}
      {renderList()}
    </div>
  );
}

export default App;
