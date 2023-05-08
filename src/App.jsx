/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <div>
      <Header className="header" />
      <main>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
