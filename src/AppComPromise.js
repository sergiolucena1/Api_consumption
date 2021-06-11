
import api from "./api/api";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");

  function getPost() {
    api
      .get(`/postso`)
      .then((response) => {
        // console.log(response.data)
        setValue(response.data)
      })
      .catch((error)=> {
        console.error(error)
      }); // then = dai, faca a partir disso
  }
  function renderList() {
    if (value == null | value == (``))
      return <p>sem itens na lista</p>
    var result = []
    console.log(value)
    value.forEach(element => {
      result.push(<p>{element.title}</p>)

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
