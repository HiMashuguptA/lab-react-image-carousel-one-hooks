import "./App.css";
import Carousel from "./components/Carousel";
import React from "react";
import images from "./data/CarouselData";
function App() {
  return (
    <div className="App">
      <Carousel data={images}/>
    </div>
  );
}

export default App;