import { useState } from "react";

import Header from "./components/Header";

import s from "./App.module.scss";

function App() {
  const [zoom, setZoom] = useState("100");

  return (
    <>
      <Header zoom={zoom} setZoom={setZoom} />
    </>
  );
}

export default App;
