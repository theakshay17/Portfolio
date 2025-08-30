import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
