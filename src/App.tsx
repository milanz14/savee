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
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

import Navbar from "./components/Navbar";

// Auth
import AuthProvider from "./contexts/AuthContext";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/update-profile" element={<PrivateRoute />}>
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Route>
        <Route path="password-reset" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
