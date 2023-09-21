import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div className="main_section bg-slate-500">
          <Header />
          hey
        </div>
      </Router>
    </>
  );
}

export default App;
