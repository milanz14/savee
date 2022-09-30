import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Details from "./components/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

import AuthProvider from "./contexts/AuthContext";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
