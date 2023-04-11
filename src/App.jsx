import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((response) =>
      // setting the state to the memes we get
      // getting data in json format
      response.json().then((response) => setImg(response.data.memes))
    );
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* // map thru memes  */}
      {img.map((imgs) => {
        // imgs.id, url and name are the properties from the json object that is being extracted so I can see the memes
        return (
          <img
            style={{ width: 200 }}
            key={imgs.id}
            src={imgs.url}
            alt={imgs.name}
          />
        );
      })}
    </div>
  );
}

export default App;
