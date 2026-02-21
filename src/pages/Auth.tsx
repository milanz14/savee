import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

import { useState } from "react";

const Auth = () => {
  const [currentAuth, setCurrentAuth] = useState<string>("login");

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
      <div className="w-[50%] bg-[#1c1f2e] border border-[#252836] rounded-2xl p-8 shadow-2xl">
        {currentAuth === "login" ? (
          <Login setCurrentAuth={setCurrentAuth} />
        ) : (
          <Register setCurrentAuth={setCurrentAuth} />
        )}
      </div>
    </div>
  );
};

export default Auth;
