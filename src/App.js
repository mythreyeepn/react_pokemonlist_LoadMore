import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [displayList, setDisplayList] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [num, setNum] = useState(6);

  useEffect(() => {
    const results = fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        setTotalResults(data.results);
        let newResults = [...data.results];
        setDisplayList(newResults.splice(0, num));
      });
  }, [num]);

  return (
    <div className="App">
      <header>
        <p>Pokemon List</p>
      </header>
      <div className="container">
        {displayList &&
          displayList.length > 0 &&
          displayList.map((item, index) => {
            return (
              <div className="item" key={index}>
                {item.name}
              </div>
            );
          })}
      </div>
      <button
        disabled={displayList.length === totalResults.length}
        onClick={() => setNum(num + 6)}
      >
        {" "}
        Load More
      </button>
    </div>
  );
}

export default App;
