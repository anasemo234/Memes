import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState([]);
  const [imgs, setImgs] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((response) =>
      // setting the state to the memes we get
      response.json().then((response) => setImg(response.data.memes))
    );
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      // map thru
      {img.map((imgs) => {
        return (
          <img
            style={{ width: 200 }}
            key={imgs.id}
            src={imgs.url}
            alt={imgs.name}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
}

export default App;
