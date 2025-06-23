import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./Mainpage";
import Modal from "./Modal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
}

export default App;
