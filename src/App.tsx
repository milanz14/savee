import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
