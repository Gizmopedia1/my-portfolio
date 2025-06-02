import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../Home/Home.jsx'


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} />
      </Routes>
    </div>

  )
}

export default App
