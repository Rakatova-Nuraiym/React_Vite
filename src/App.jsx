import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("10");

  const getData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const responseData = await response.json();
      const filteredData = await responseData.results.filter(
        (item) => item.id <= input
      );
      console.log(responseData.results);
      setData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getData();
  // }, []);

  const UpDete = () => {
    getData();
  };

  return (
    <>
      <div>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => UpDete()}>Updata</button>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.status}</p>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
