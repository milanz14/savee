import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../lib/validation/validationSchemas";
import type { RegisterFormValues } from "../../interfaces/interfaces";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

const Login = ({
  setCurrentAuth,
}: {
  setCurrentAuth: (string: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const { loginWithEmail } = useAuth();

  const onSubmit = async (data: RegisterFormValues) => {
    let result = { success: false, message: "" };
    setIsLoading(true);
    result = await loginWithEmail(data.email, data.password);
    if (result.success) {
      setIsLoading(false);
      navigate({ to: "/dashboard" });
    }
    if (!result.success) {
      setIsLoading(false);
      alert(result.message);
    }
    reset();
  };

  return (
    <div className="relative rounded-2xl">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "180%",
            height: "180%",
            background:
              "radial-gradient(ellipse, rgba(129,140,248,0.18) 0%, transparent 60%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute -top-[20%] -right-[10%]"
          style={{
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle, rgba(248,113,113,0.10) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute -bottom-[30%] -left-[20%]"
          style={{
            width: "80%",
            height: "80%",
            background:
              "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl p-5 text-[#eef0f6]">
        <h1 className="text-2xl font-semibold">Savee Log in</h1>
        <div className="relative my-5">
          <input placeholder="Email" type="email" {...register("email")} />
          {errors.email && (
            <span className="text-red-400 absolute text-xs -bottom-6 right-0">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="relative my-5">
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-400 absolute text-xs -bottom-6 right-0">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-between lg:flex-row flex-col gap-2 items-center pt-4">
          <button
            disabled={isLoading}
            type="submit"
            style={{
              background: "linear-gradient(45deg, #818cf8, #a5b4fc)",
              border: "none",
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(129,140,248,0.3)",
              minWidth: "200px",
            }}>
            <div className="flex items-center gap-2">
              {isLoading ? (
                <span>
                  <FaSpinner className="animate-spin" />
                </span>
              ) : (
                <span>Login</span>
              )}
            </div>
          </button>
          <a
            onClick={() => setCurrentAuth("register")}
            className="text-center hover:underline">
            No Account? Register.
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
