import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

import AuthProvider from "./contexts/AuthContext";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
