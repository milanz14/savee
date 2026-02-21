import { Button, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../lib/validation/validationSchemas";
import type { RegisterFormValues } from "../../interfaces/interfaces";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

import tokens from "../../lib/constants/colours";

const Register = ({ setCurrentAuth }: { setCurrentAuth: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
  });

  const navigate = useNavigate();

  const { registerWithEmail } = useAuth();

  const onSubmit = async (data: RegisterFormValues) => {
    let result = { success: false, message: "" };
    result = await registerWithEmail(data.name, data.email, data.password);
    if (result.success) {
      navigate({ to: "/dashboard" });
    }
    if (!result.success) {
      alert(result.message);
    }
    console.log(result);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl p-5 text-[#eef0f6]">
      <div className="relative my-5">
        <TextInput
          placeholder="First Name"
          size="md"
          radius="lg"
          type="name"
          label="Name"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="relative my-5">
        <TextInput
          placeholder="Email"
          size="md"
          radius="lg"
          type="email"
          label="Email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="relative my-5">
        <TextInput
          placeholder="Password"
          size="md"
          radius="lg"
          type="password"
          label="Password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        variant="filled"
        size="lg"
        radius="lg"
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
        }}>
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
