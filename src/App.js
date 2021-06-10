
import api from "./api/api";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");

  function getRandomArbitrary() {
    return (Math.random() * (100 - 1) + 1).toFixed(0);
  }

  async function getPost() {
    let response = await api.get(`/posts/${getRandomArbitrary()}`)

    return response.data
  }

  function renderList() {
    if (value === null | value.length === 0){
      return <p>sem itens na lista</p>
    }
      
    var result = []

    value.forEach((element, index) => {
      console.log("1", index, element.id)
      result.push(<p key={index}>{element.id} - {element.title}</p>)

    });
    return result
  }


  async function startLoop() {
    new Promise(async (resolve, reject) => {
      let listaPosts = []
      for (let index = 0; index < 100; index++) {
        const post = await getPost()
        listaPosts.push(post)
        console.log(listaPosts)
        setValue(listaPosts)
      }
      resolve()
    })
  }



  return (
    <div className="App">
      <h1>'api'</h1>
      <button onClick={startLoop}>get</button>
      {/* <p>{value?.title}</p> */}
      {renderList()}
    </div>
  );
}

export default App;
