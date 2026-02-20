import Register from "../components/Auth/Register";

const Auth = () => {
  return (
    <div
      className="w-[50%] mx-auto my-50"
      style={{
        padding: "32px",
        borderRadius: "16px",
        border: "1px solid #252836",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
      }}>
      <Register />
    </div>
  );
};

export default Auth;
