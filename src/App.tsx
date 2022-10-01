// styles
import "./App.css";

// Library imports
import { Routes, Route } from "react-router-dom";

// Components
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/Profile";

// Auth
import AuthProvider from "./contexts/AuthContext";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
