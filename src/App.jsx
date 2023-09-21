import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div className="main_section bg-slate-500">
          <Header />
          <h2 className="text-white">Hey tailwind</h2>
        </div>
      </Router>
    </>
  );
}

export default App;
