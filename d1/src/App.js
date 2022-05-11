import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Componant/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./Componant/Company";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:companyName" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
