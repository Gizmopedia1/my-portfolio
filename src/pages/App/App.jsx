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
        <Route path="/my-portfolio" element={<Home />} />
            {/* <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </div>

  )
}

export default App
