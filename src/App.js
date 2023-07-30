import React from "react";
import {Routes,Route} from 'react-router-dom';
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Wormhole from "./components/Wormhole";
import Home from "./routes/Home";
import Mars from "./routes/Mars";
import Sun from "./routes/Sun";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mars' element={<Mars />}></Route>
        <Route path='/moon' element={<Moon />}></Route>
        <Route path='/sun' element={<Sun />}></Route>
        <Route path='/wormhole' element={<Wormhole />}></Route>
        <Route path='/earth' element={<Earth />}></Route>
      </Routes>
    </>
  );
}

export default App;
