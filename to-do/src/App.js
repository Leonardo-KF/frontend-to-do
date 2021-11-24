import "./App.css";
import Header from "./components/shared/header/header";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
