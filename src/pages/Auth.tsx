import Register from "../components/Auth/Register";

const Auth = () => {
  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
      <div className="w-[50%] bg-[#1c1f2e] border border-[#252836] rounded-2xl p-8 shadow-2xl">
        <Register />
      </div>
    </div>
  );
};

export default Auth;
