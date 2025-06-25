import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./Mainpage";
import Modal from "./Modal";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
