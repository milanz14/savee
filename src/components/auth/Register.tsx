import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../lib/validation/validationSchemas";
import type { RegisterFormValues } from "../../interfaces/interfaces";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

import tokens from "../../lib/constants/colours";

import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

const Register = ({
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

  const navigate = useNavigate();

  const { registerWithEmail } = useAuth();

  const onSubmit = async (data: RegisterFormValues) => {
    const { name, email, password } = data;
    let result = { success: false, message: "" };
    setIsLoading(true);
    result = await registerWithEmail(name, email, password);
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
        <h1 className="text-2xl font-semibold">Register for Savee.</h1>
        <div className="relative my-5">
          <label htmlFor="name">Name</label>
          <input
            placeholder="First Name"
            type="name"
            id="name"
            {...register("name")}
            className="rounded-lg w-full border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white"
          />
          {errors.name && (
            <span className="text-[#f87171] absolute text-xs -bottom-7 right-0 p-2.5">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="relative my-5">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="email"
            id="email"
            {...register("email")}
            className="rounded-lg w-full border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white"
          />
          {errors.email && (
            <span className="text-[#f87171] absolute text-xs -bottom-7 right-0 p-2.5">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="relative my-5">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            {...register("password")}
            className="rounded-lg w-full border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white"
          />
          {errors.password && (
            <span className="text-[#f87171] absolute text-xs -bottom-7 right-0 p-2.5">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="relative my-5">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className="rounded-lg w-full border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white"
          />
          {errors.confirmPassword && (
            <span className="text-[#f87171] absolute text-xs -bottom-7 right-0 p-2.5">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="flex justify-between lg:flex-row flex-col gap-2 items-center pt-4">
          <button
            disabled={isLoading}
            type="submit"
            style={{
              background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
              border: "none",
              color: "#fff",
              padding: "15px 36px",
              borderRadius: 13,
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: `0 8px 32px rgba(129,140,248,0.4)`,
              transition: "transform 0.15s, opacity 0.15s",
              minWidth: "200px",
            }}>
            <div className="flex items-center justify-center gap-2">
              {isLoading ? (
                <span>
                  <FaSpinner className="animate-spin" />
                </span>
              ) : (
                <span>Sign Up</span>
              )}
            </div>
          </button>
          <a
            onClick={() => setCurrentAuth("login")}
            className="text-center hover:underline cursor-pointer">
            Registered? Log in here.
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
