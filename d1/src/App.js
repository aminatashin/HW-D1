import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchJobs from "./Componant/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchJobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
