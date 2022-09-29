import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Details from "./components/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

import { LoginContext } from "./helpers/LoginContext";

function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
