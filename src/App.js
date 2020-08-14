import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import NasaPost from "./NasaPost";
import Footer from "./Footer";
import axios from "axios";
// import "./App.css";

// const day = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// const newDay = day.setDate(day.getDate() - 1);
// newDay.toString();
// // day.setDate(day.getDate() - 1);

// console.log(newDay);

// const today = new Date().format('m-d-Y');
// console.log(today);

// const day = Date.now();
// day.toJSON().slice(0, 10).replace(/-/g, "/");
// day.toString();
// console.log(day);

var date = new Date(Date.now());
var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 400000 ))
                    .toISOString()
                    .split("T")[0];

console.log(dateString);
function App() {
  const [apods, setApod] = useState([]);
  // const api_key = "CtUPAONsTf6UnI5ZLRbJkgTogRdByfCgR6W6TGf2#";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateString}`)
      .then((response) => {
        setApod(response.data);
        console.log(response);
      })
      .catch((error) => console.log("Something went wrong: ", error));
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
