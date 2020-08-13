import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import NasaPost from "./NasaPost";
import Footer from "./Footer";
import axios from "axios";
// import "./App.css";

function App() {
  const [apods, setApod] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=CtUPAONsTf6UnI5ZLRbJkgTogRdByfCgR6W6TGf2#")
    .then(response => {
      setApod(response.data);
      console.log(response);
    })
    .catch(error => console.log("Something went wrong: ", error));
  }, []);

  return (
    <div className="App">
      <MainHeader />
      <NasaPost apods={apods} />
      <Footer />
    </div>
  );
}

export default App;
