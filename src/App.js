import "./App.css";
import api from "./api/api";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");

  function getRandomArbitrary() {
    return (Math.random() * (100 - 1) + 1).toFixed(0);
  }

  function getPost() {
    console.log(getRandomArbitrary());
    api
      .get(`/posts/${getRandomArbitrary()}`)
      .then((response) => setValue(response.data)); // then = dai, faca a partir disso
  }

  return (
    <div className="App">
      <h1>'api'</h1>
      <button onClick={getPost}>get</button>
      <p>{value?.title}</p>
    </div>
  );
}

export default App;
